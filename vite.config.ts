import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  // FIX: Automatically use '/' for local development (npm run dev)
  // Only use the repository name for the production build (npm run build)
  const isDev = command === 'serve';
  const base = isDev ? '/' : (env.VITE_BASE_PATH || '/REPOSITORY-NAME/');

  return {
    base: base,
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        // FIX: Temporarily removed strict asset inclusion requirements
        // until we generate actual icons for the PWA in a later command
        manifest: {
          name: 'S.Baruah Science Academy',
          short_name: 'Science Academy',
          description: 'Premium interactive educational platform for Class 8 and 9 Science.',
          theme_color: '#0f172a',
          background_color: '#0f172a',
          display: 'standalone',
          orientation: 'portrait',
          icons: [] // Leave empty until we create real icons
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  };
});
