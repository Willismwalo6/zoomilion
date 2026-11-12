import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The dev server binds to all interfaces so a cloud preview can reach it.
// The preview hostname is supplied per process as VITE_PREVIEW_HOST so that no
// machine-specific hostname is committed to the repository.
const previewHost = process.env.VITE_PREVIEW_HOST;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    allowedHosts: previewHost ? [previewHost] : undefined,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: previewHost ? [previewHost] : undefined,
  },
});
