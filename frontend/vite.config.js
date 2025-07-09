import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// Use the imported defineConfig
export default defineConfig({
    plugins: [
      react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Changed from 5000 to 5001
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path // Keep /api prefix
      }
    }
  }
})