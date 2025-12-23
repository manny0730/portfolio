import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    // Increase the warning limit slightly to reduce noise
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 1. Separate Spline (Very heavy)
          if (id.includes('@splinetool')) {
            return 'spline';
          }
          // 2. Separate Framer Motion (Heavy)
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }
          // 3. Put all other node_modules (React, etc.) into a 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})