import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/', // Custom domain pravin.is-a.dev is served from root
  build: {
    sourcemap: false, // Prevent exposing unminified source code in production build
    chunkSizeWarningLimit: 800,
  },
})
