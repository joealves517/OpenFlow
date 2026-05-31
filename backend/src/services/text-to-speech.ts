import textToSpeech from "@google-cloud/text-to-speech";
import { config } from "../config/index.js";

const ttsClient = new textToSpeech.TextToSpeechClient({
  projectId: config.gcp.projectId,
});

/**
 * Mapped voice identifiers to actual Google Cloud TTS voice names.
 * Standardizes voices from ElevenLabs friendly names to Google Neural2/Wavenet.
 */
const VOICE_MAP: Record<string, { name: string; lang: string }> = {
  // English voices only (fallback mapping for default keys to ensure backward compatibility)
  "autumn": { name: "en-US-Neural2-F", lang: "en-US" },  // Map default to English Female (Expressive)
  "diana": { name: "en-US-Neural2-C", lang: "en-US" },   // Map to English Female
  "hannah": { name: "en-US-Neural2-H", lang: "en-US" },  // Map to English Female
  
  "austin": { name: "en-US-Neural2-D", lang: "en-US" },  // Male (Deep)
  "daniel": { name: "en-US-Neural2-J", lang: "en-US" },  // Male (Standard)
  "troy": { name: "en-US-Neural2-F", lang: "en-US" },    // Female (Expressive)
};

function inferGender(voiceName: string): "MALE" | "FEMALE" | "NEUTRAL" {
  if (/-[BD]$/.test(voiceName)) return "MALE";
  if (/-[ACF]$/.test(voiceName)) return "FEMALE";
  return "NEUTRAL";
}

/**
 * Generate a single TTS audio track returned as Base64 string.
 */
export async function synthesizeTTS(text: string, voiceKey = "autumn"): Promise<{ base64: string; mimeType: string }> {
  const mapped = VOICE_MAP[voiceKey.toLowerCase()] || VOICE_MAP["autumn"];
  const ssmlGender = inferGender(mapped.name);

  console.log(`[TTS Service] Synthesizing speech: voice=${mapped.name}, lang=${mapped.lang}, text_len=${text.length}`);

  const [response] = await ttsClient.synthesizeSpeech({
    input: { text },
    voice: {
      languageCode: mapped.lang,
      name: mapped.name,
      ssmlGender,
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate: 1.0,
      pitch: 0.0,
    },
  });

  if (!response.audioContent) {
    throw new Error("No audio content returned from Google Text-to-Speech");
  }

  const base64 = Buffer.from(response.audioContent as Uint8Array).toString("base64");
  return {
    base64,
    mimeType: "audio/mpeg",
  };
}
