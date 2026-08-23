import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  // MOBILE UPLOAD FIX: Using './' guarantees GitHub Pages finds assets regardless of repo name
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'S.Baruah Science Academy',
        short_name: 'Science Academy',
        description: 'Premium interactive educational platform for Class 8 and 9 Science.',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [] // Kept empty to prevent build crashes until we generate icons
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
