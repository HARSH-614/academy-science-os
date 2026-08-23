import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  // THE FIX: Using './' makes all asset links relative.
  // It will now automatically work on GitHub Pages regardless of your repository name.
  base: './', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // We temporarily leave icons empty so the build doesn't fail
      // while we wait to generate real ones in a future command.
      manifest: {
        name: 'S.Baruah Science Academy',
        short_name: 'Science Academy',
        description: 'Premium interactive educational platform for Class 8 and 9 Science.',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        orientation: 'portrait',
        icons: [] 
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
