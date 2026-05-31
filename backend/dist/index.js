import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config/index.js";
import { rateLimit } from "./middleware/rate-limit.js";
import userRouter from "./routes/user.js";
import webhookRouter from "./routes/webhook.js";
import screenityAiRouter from "./routes/screenity-ai.js";
import screenityAiFreeRouter from "./routes/screenity-ai-free.js";
import pexelsRouter from "./routes/pexels.js";
const app = express();
// ─── Security ───────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
    origin: [
        // Spark AI Chrome extension
        "chrome-extension://jaddgjjhbekcjdpmoglkeakpihbmgiah",
        // BlackNote Chrome extension
        "chrome-extension://cgmimbllhpkfcegecbdhldfmlfbfdhfg",
        // AI Screen Recorder Chrome extension
        "chrome-extension://imhihgooenkgfnmklplobjmnglalaomm",
        // Dev / old
        "chrome-extension://jpmmjclfhdbkdhmjibgjheeagobhafmd",
        "chrome-extension://kifnbpilpjgdkjbpcejligaglcjdkjjb",
        "chrome-extension://hmpblhofhafggbbnihgfmdjecedleiai",
        // Allow any chrome extension during development
        /^chrome-extension:\/\/.+$/,
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
// ─── Body Parsing ───────────────────────────────────────────────────
// Webhook route needs raw body for signature verification
app.use("/api/webhook/ls", express.raw({ type: "application/json" }), webhookRouter);
// All other routes use JSON parsing
// Screenity transcription sends base64 audio, needs larger limit
app.use("/api/screenity", express.json({ limit: "50mb" }));
app.use(express.json({ limit: "2mb" }));
// ─── Rate Limiting ──────────────────────────────────────────────────
app.use("/api/screenity/free", rateLimit);
app.use("/api/screenity", rateLimit);
// ─── Routes ─────────────────────────────────────────────────────────
app.use("/api/screenity/free", screenityAiFreeRouter);
app.use("/api/screenity", screenityAiRouter);
app.use("/api/user", userRouter);
app.use("/api/pexels", pexelsRouter);
// ─── Health Check ───────────────────────────────────────────────────
app.get("/health", (_req, res) => {
    res.json({ status: "ok", app: "screenity-api", version: "2.0.0" });
});
// ─── CORS Proxy ─────────────────────────────────────────────────────
app.get("/api/proxy", async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl || typeof targetUrl !== "string") {
        res.status(400).json({ error: "missing_url" });
        return;
    }
    try {
        const response = await fetch(targetUrl);
        if (!response.ok) {
            res.status(response.status).json({ error: `Failed to fetch target URL: ${response.statusText}` });
            return;
        }
        const contentType = response.headers.get("content-type") || "application/octet-stream";
        res.setHeader("Content-Type", contentType);
        res.setHeader("Access-Control-Allow-Origin", "*");
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        res.send(buffer);
    }
    catch (error) {
        console.error("[CORS Proxy Error]", error);
        res.status(500).json({ error: error.message || "Internal server error" });
    }
});
// ─── 404 ────────────────────────────────────────────────────────────
app.use((_req, res) => {
    res.status(404).json({ error: "not_found" });
});
// ─── Start ──────────────────────────────────────────────────────────
app.listen(config.port, () => {
    console.log(`[Screenity API] Listening on port ${config.port}`);
    console.log(`[Screenity API] Environment: ${config.nodeEnv}`);
    console.log(`[Screenity API] GCP Project: ${config.gcp.projectId}`);
});
export default app;
//# sourceMappingURL=index.js.map