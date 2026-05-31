import { defineConfig } from 'wxt';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'VidFlow - Video Editor & Recorder',
    description: 'Add smooth zooms, mockups, customize backgrounds, camera, audio, elements, and export professional demos.',
    version: '1.0.0',
    key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArhBfO0OUS2aX/ohtdBJlk+XjUy/Pj/IDN5glwm6L3/Gz5ZUbNFAk0oYdSU/hwqRg7nxm5mh4IhMmhrPQj6XmKowvlZX/TDxFmkCA8IL5n2z0K9A1MTRMscraKivQllmiqdxFFOgIYgV84GAlCzYMgkQRfXsT0gYSnUHgPeEKHzGMTws/kfZUcHBl4sVstQMMg5GZyUnBkq4aTcTx2yRlQ2wRSa0jIONbHBqF6yEV4U1nF9kA4NjEtMDxAiBE4Q7oJioFss6SE/dtEX5pPoz0zKaAV4ZjdN+xbopLHatOwd+eLHM89Q2jVJEhw7akR1EgEXHG/PPKjoQBQPtizDJDdwIDAQAB',
    oauth2: {
      client_id: '676582412453-ffke67viulkk8r4tppl75en6gqe96opu.apps.googleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    },
    permissions: ['identity'],
    host_permissions: [
      'https://api.pexels.com/*',
      'https://images.pexels.com/*',
      'https://*.soundhelix.com/*',
      'https://openvid-backend-676582412453.us-central1.run.app/*'
    ],
    action: {},
  },
  vite: () => ({
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'next/image': path.resolve(__dirname, './mocks/next-image.tsx'),
        'next/link': path.resolve(__dirname, './mocks/next-link.tsx'),
        'next/navigation': path.resolve(__dirname, './mocks/next-navigation.tsx'),
        'next/dynamic': path.resolve(__dirname, './mocks/next-dynamic.tsx'),
        'next/script': path.resolve(__dirname, './mocks/next-script.tsx'),
        'next-intl': path.resolve(__dirname, './mocks/next-intl.ts'),
        'next-intl/server': path.resolve(__dirname, './mocks/next-intl.ts'),
        '@/navigation': path.resolve(__dirname, './mocks/next-navigation.tsx'),
      },
    },
    // Required to support SharedArrayBuffer in some build configurations
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
    },
  }),
});
