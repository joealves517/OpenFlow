# Privacy Policy for VidFlow - Video Editor & Recorder

**Last updated: May 31, 2026**

Welcome to VidFlow ("we," "our," "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy describes how we collect, handle, store, use, and share information when you install, access, or use the VidFlow browser extension (the "Extension") and our related services.

We adhere strictly to a **local-first philosophy**. Your trust is our highest priority, and we ensure that your creative media content remains under your complete ownership and local control.

---

## 1. Introduction and Scope

This Privacy Policy applies to the VidFlow browser extension (Chrome Web Store ID: `mjofdkbhegjeepdjmdflechielcphdlk`) and its associated services. By installing and using the Extension, you agree to the practices outlined in this policy.

---

## 2. What Data We Collect and Why

We collect only the minimum amount of information necessary to provide, secure, and verify our services. We do not engage in future-proofing data collection or collecting data for advertising or tracking purposes.

### A. Personally Identifiable & Authentication Information
If you choose to log in using trusted third-party providers (Google OAuth via Chrome Identity API or GitHub OAuth), we receive and store:
*   **Email address:** To uniquely identify your account, send transaction receipts, and verify your identity.
*   **Display name:** To personalize your user dashboard and workspace.
*   **Profile avatar URL:** To display your user avatar within the extension interface.

*Purpose:* This authentication data is strictly required to establish your account, maintain an active session, and link your account status (Free or Pro tier) with our services.

### B. Media and Captured Content (100% Local-First)
*   **Webcam Feeds, Screen Recordings, and Imported Assets:** All raw and processed video recordings, audio tracks, and imported assets (images, logos, audio files) are captured and handled **entirely locally in your browser's active memory and local temporary cache**.
*   **No Remote Transmission of Media:** We do **NOT** upload, transmit, copy, or store your screen recordings, webcam video feeds, microphone audio, or uploaded files on our servers or with any third party. All rendering and export operations are performed locally.

### C. Extension Usage & Local Preferences
We collect local project preferences such as zoom levels, custom backgrounds, crop ratios, templates, and layouts. 

*Purpose:* To allow you to save work-in-progress editing projects and customize your editing environment.

---

## 3. How Data is Processed, Handled, and Stored

Your data is processed and stored securely, respecting the boundary between your local device and our cloud services:

*   **Local Processing (Media and Editing):** All video encoding, rendering, cropping, zooming, and audio mixing are executed **100% locally on your machine** using high-performance modern web technologies (WebAssembly and FFmpeg.wasm). No media processing tasks are delegated to remote servers.
*   **Local Storage (Browser-Based):** Custom layouts, video timeline metadata, and imported media assets are saved locally on your device using standard browser storage mechanisms (IndexedDB and local web storage).
*   **Cloud Storage (Account & Subscriptions):** Personally identifiable authentication info (email, display name) and subscription billing status are stored securely on our database servers managed by our hosting provider, Supabase.

---

## 4. Data Sharing, Disclosure, and Third-Party Services

### A. Explicit No-Sharing and No-Selling Policy
*   We **never** sell, trade, rent, lease, or monetize your personal data or authentication details with any third parties under any circumstances.
*   We do **not** share your data with advertisers, third-party brokers, or data analytics companies.

### B. Trusted Third-Party Service Providers
We rely on standard, trusted industry providers to facilitate secure sign-in and account operations. We encourage you to review their respective privacy policies:

1.  **Google Identity Services / Google OAuth (Chrome Identity API):** Used for authenticating your identity on Chrome browser.
    *   *Data Handled:* Google Account Email and Profile Name/Avatar.
    *   *Privacy Policy:* [Google Privacy Policy](https://policies.google.com/privacy)
2.  **Supabase, Inc.:** Used as our secure backend infrastructure for database storage, user sign-in session management, and subscription tier status mapping.
    *   *Data Handled:* Auth tokens, email address, profile metadata, subscription tier.
    *   *Privacy Policy:* [Supabase Privacy Policy](https://supabase.com/privacy)

### C. Legal Requirements
We may disclose personal data only when required to do so by law, court order, or regulatory authority, or to protect the safety, rights, or property of our users or the public.

---

## 5. Data Retention and Deletion

*   **Local Media and Project Data:** Retained on your device indefinitely until you manually choose to delete your project, clear your browser history/cookies, or uninstall the Extension. 
*   **Authentication & Account Profiles:** Retained in our secure cloud database as long as your account remains active.
*   **Permanent Account Deletion:** You have the absolute right to delete your account at any time. Upon request, we will permanently purge all cloud records of your email address, profile metadata, and subscription details. To delete your account, please email us directly at **alvesoscar517@gmail.com** with the subject line "Request for Account Deletion". All requests are processed within 7 business days.

---

## 6. User Controls and Permissions

The Extension respects standard browser sandboxing and grants you full control over hardware access:
*   **Webcam and Microphone Access:** These permissions are requested dynamically via standard browser dialogs only when you initiate a recording. You can revoke these permissions at any time via Chrome's Site Settings.
*   **Storage Access:** Standard browser local storage is managed by your browser settings. Clearing cache will purge local projects immediately.

---

## 7. Children's Privacy

VidFlow does not knowingly collect, store, or solicit personal information from children under the age of 13. If we discover that a child under 13 has provided us with personal information, we will take immediate steps to delete such data from our servers.

---

## 8. Data Security Measures

We implement robust administrative, technical, and physical security protocols to safeguard your account data:
*   All communication between the Extension and our servers is strictly encrypted in transit using industry-standard HTTPS (SSL/TLS).
*   Our database backends are protected with stringent access control policies, regular updates, and isolation measures to prevent data breaches.

---

## 9. Changes to This Privacy Policy

We may update this Privacy Policy periodically to reflect changes in our services, regulatory compliance, or store policies. We will notify you of any revisions by updating the "Last updated" date at the top of this document. We encourage you to review this policy periodically to stay informed about how we protect your privacy.

---

## 10. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, your data rights, or how your personal information is handled, please contact our support team at:

*   **Email:** **alvesoscar517@gmail.com**
*   **Support/Inquiries:** Chrome Web Store Developer Support - Alves Oscar

---

## 11. Open Source License & Source Code Compliance

VidFlow is committed to supporting and contributing to the open-source software community. 

*   **GNU AGPLv3 License:** This browser extension is a modified version based on the open-source **OpenVid** project and is licensed under the **GNU Affero General Public License Version 3 (AGPL-3.0)**.
*   **Source Code Availability:** In full compliance with the copyleft terms of the AGPLv3 license, we make our complete, corresponding source code publicly available. You are free to inspect, modify, audit, and redistribute the source code under the same licensing terms.
*   **Source Code Repositories:**
    *   **Original Parent Project Repository:** [github.com/skydiver/openvid](https://github.com/skydiver/openvid)
    *   **Our Modified Project Repository:** [github.com/joealves517/OpenFlow](https://github.com/joealves517/OpenFlow)

