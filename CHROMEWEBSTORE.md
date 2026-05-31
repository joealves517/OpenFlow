# Chrome Web Store Listing — VidFlow - Video Editor & Recorder

> Last Updated: 2026-05-31

This file serves as the single source of truth for the Chrome Web Store Developer Dashboard listing metadata, permissions justifications, and privacy disclosures for **VidFlow - Video Editor & Recorder**.

---

## Store Listing

**Extension Name**
VidFlow - Video Editor & Recorder

**Short Description**
Add smooth zooms, mockups, customize backgrounds, camera, audio, elements, and export professional demos.

**Detailed Description**
VidFlow is a local-first, professional screen recorder and video editor designed directly for your browser. It allows developers, product managers, creators, and professionals to record high-quality product demos, tutorials, and walkthroughs, apply beautiful device mockups, customize backgrounds, and apply buttery-smooth camera zooms instantly—all without needing high-end video editing software.

Key Features:
* High-Performance Screen & Camera Recording: Record your browser tabs, specific windows, or entire screen, optionally overlaying a camera feed and microphone audio.
* Local Video & Audio Editing: Crop, trim, add elements, adjust speed, and overlay background audio in real time.
* Smooth Zoom & Camera Motion: Point-and-click to add dynamic camera movements and smooth zooms to highlight key product interactions.
* Stunning Mockups & Backgrounds: Wrap your video in premium mockups (laptops, phones, browsers) and set harmonious custom gradients or wallpapers.
* 100% Client-Side Processing: Powered by WebAssembly and FFmpeg.wasm, your video rendering, cropping, and exporting occur 100% locally on your computer. Your recordings are never uploaded to any remote servers, maintaining complete privacy.
* Effortless Secure Sign-In: Securely log in using Google or GitHub to link your account and manage subscription access.

How to Use:
1. Click the VidFlow extension icon in your toolbar to launch the dashboard.
2. Select your recording inputs (Screen, Window, Tab, Webcam, Microphone).
3. Record your workflow or upload an existing video asset.
4. Use the timeline editor to trim segments, insert zooms, and customize layout mockups.
5. Export your high-definition video directly to your downloads folder.

**Category**
Productivity

**Single Purpose**
A local-first video editor and screen recorder that lets users capture, wrap in premium mockups, apply smooth zoom animations, and export professional demos 100% locally in their browser.

**Primary Language**
English

---

## Graphics & Assets

| Asset | Dimensions | Status | Filename |
|-------|-----------|--------|----------|
| Store Icon [REQUIRED] | 128×128 PNG | ✅ Ready | `assets/icon-128.png` |
| Screenshot 1 [REQUIRED] | 1280×800 | ✅ Ready | `store-assets/screenshot-editor.png` |
| Screenshot 2 [RECOMMENDED] | 1280×800 | ✅ Ready | `store-assets/screenshot-recorder.png` |
| Screenshot 3 [RECOMMENDED] | 1280×800 | ✅ Ready | `store-assets/screenshot-mockups.png` |
| Small Promo Tile [RECOMMENDED] | 440×280 | ✅ Ready | `store-assets/promo-small.png` |

---

## Permissions Justification

Every permission in our manifest has been audited to ensure compliance with the "narrowest permissions necessary" rule. We have proactively removed `storage` and `activeTab` because our extension operates using standard Web Storage APIs (`localStorage`/`IndexedDB`) and standard web recording APIs (`navigator.mediaDevices.getDisplayMedia`).

| Permission | Type | Justification |
|------------|------|---------------|
| `identity` | permissions | Used to retrieve the user's secure Google OAuth ID token via the Chrome Identity API to facilitate one-click, secure account registration, login, and subscription verification. |

---

## Privacy & Data Use

### Data Collection

**Does the extension collect user data?** Yes

| Data Type | Collected? | Transmitted Off-Device? | Purpose | Shared with Third Parties? |
|-----------|-----------|------------------------|---------|---------------------------|
| Personally identifiable info | Yes | Yes (strictly to our backend, Supabase) | Used for account authentication, user dashboard association, and verifying subscription status. | No (stored securely in our dedicated database host). |
| Authentication info | Yes | Yes (strictly to our backend, Supabase) | Used to authenticate sign-in tokens with Google OAuth to authenticate users securely. | No. |
| Health info | No | No | N/A | No. |
| Financial info | No | No | N/A | No. |
| Personal communications | No | No | N/A | No. |
| Location | No | No | N/A | No. |
| Web history | No | No | N/A | No. |
| User activity | No | No | N/A | No. |
| Website content | No | No | N/A | No. |

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

---

## Privacy Policy

**Privacy Policy URL**
`https://openvid-extension.pages.dev/privacy` (Publicly hosted, mirroring `/PRIVACY.md`)

---

## Distribution

**Visibility**: Public
**Regions**: All regions
**Pricing**: Free (with in-app Pro tier upgrades)

---

## Developer Info

**Publisher Name**
Alves Oscar

**Contact Email**
alvesoscar517@gmail.com

**Support URL / Email**
alvesoscar517@gmail.com

---

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0-rev1 | 2026-05-31 | Removed `storage` and `activeTab` permissions to comply with CWS rules. Fully overhauled `PRIVACY.md` to add explicit sections, third-party policies, and data handling details. | Draft |
| 1.0.0 | 2026-05-26 | Initial submission containing full video recorder, editor, Supabase auth, and local FFmpeg processing. | Rejected |

---

## Review Notes

### Rejection History

| Date | Violation ID | Violation Reason | Fix Applied | Resubmitted |
|------|--------------|------------------|-------------|-------------|
| 2026-05-30 | Purple Potassium | Requesting but not using `storage` permission. | Audited permissions and removed `storage` (and unused `activeTab`) from `wxt.config.ts`. Verified all code relies on browser standard `localStorage`/`IndexedDB` instead of extension storage. | Yes |
| 2026-05-30 | Purple Nickel | Privacy Policy is missing necessary details about collection, storage, and third-party policies. | Overhauled `PRIVACY.md` to cover all CWS standard sections, detail authentication flow, state explicit local-first media policies, and link to Google & Supabase policies. | Yes |
