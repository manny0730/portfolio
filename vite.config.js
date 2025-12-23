import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    // Keep this high to hide the warning. 
    // Since you are lazy loading, big chunks are fine because they load individually.
    chunkSizeWarningLimit: 1600, 
  },
})