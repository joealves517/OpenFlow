# VidFlow (OpenFlow) — Video Editor & Recorder

An advanced, local-first web browser screen recorder and video editor built for developers, product managers, and creators. VidFlow enables you to record high-fidelity screen captures, webcam overlays, apply beautiful device mockups, customize canvas backgrounds, and insert buttery-smooth camera zooms—all processed **100% locally** inside your web browser.

---

## 🚀 Key Features

*   **Cinematic Camera Zooms & Panning:** Point-and-click to add smooth zoom keyframes on your video timeline to guide the viewer's attention.
*   **Premium Device Mockups:** Instantly wrap your recordings in polished device frames (MacBook, iPhone, Chrome browser chrome, VSCode IDE, etc.).
*   **Dynamic Canvas Backgrounds:** Set high-resolution gradients, patterns, minimalist abstract wallpapers, or custom image backdrops.
*   **Real-time Multitrack Audio:** Add and sync background music tracks or voiceovers directly on the editor timeline.
*   **100% Client-Side Processing:** Powered by **WebAssembly** and **FFmpeg.wasm**. All video cropping, rendering, and encoding happen securely in your browser's local sandbox—no video is ever uploaded to a server.
*   **Secure Google OAuth:** Safe one-click sign-in via Chrome Identity API to manage account preferences and subscription access.

---

## 🛠️ Tech Stack

*   **Core:** [WXT (Next-Gen Web Extension Framework)](https://wxt.dev/), React 19, TypeScript.
*   **Styling & UI:** TailwindCSS v4.0.0, Radix UI, shadcn/ui.
*   **Animations:** Framer Motion, GSAP, Atropos, Swapy.
*   **Processing:** FFmpeg.wasm, lamejs.
*   **Database & Auth:** Supabase.

---

## 📦 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18+) and [pnpm](https://pnpm.io/) or `npm` installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/joealves517/OpenFlow.git
   cd OpenFlow
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables:
   Copy the example environment file and fill in your details:
   ```bash
   cp .env.example .env
   ```
   *Note: `.env` is ignored by Git to prevent API keys and secrets from leaking.*


### Running Locally (Development Mode)

Start the WXT hot-reloading development server:
```bash
pnpm dev
# or
npm run dev
```
This will automatically launch a sandboxed Chrome instance with the extension pre-installed. Any changes in the source code will live-reload immediately.

### Building for Production

Compile TypeScript and build the production-ready extension package:
```bash
pnpm build
# or
npm run build
```
The compiled, production-ready extension assets will be generated inside the `.output/chrome-mv3` folder, which can be zipped and uploaded to the Chrome Web Store.

---

## ⚖️ Open Source License & Compliance

VidFlow (OpenFlow) is proudly committed to open-source software.

*   **GNU AGPLv3 License:** This project is a modified version based on the open-source **OpenVid** project and is licensed under the **GNU Affero General Public License Version 3 (AGPL-3.0)**.
*   **Copyleft Compliance:** In full compliance with Section 13 of the AGPLv3 copyleft terms, the corresponding, complete source code of this project is made publicly available.
*   **Repositories:**
    *   **Original Parent Project Repository:** [github.com/skydiver/openvid](https://github.com/skydiver/openvid)
    *   **Our Modified OpenFlow Repository:** [github.com/joealves517/OpenFlow](https://github.com/joealves517/OpenFlow)

---

## 🤝 Support and Contact

If you have any questions, feedback, or need help regarding this project or data privacy compliance, feel free to contact:

*   **Email:** `alvesoscar517@gmail.com`
*   **Developer Support:** Alves Oscar
