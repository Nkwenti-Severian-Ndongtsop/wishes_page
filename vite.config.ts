import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wishes_page/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
