import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', 
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['../../pages/agent/AgentPortal'],
            output: {
        assetFileNames: 'assets/images/hero/hero-image.jpg',
        chunkFileNames: 'assets/images/[name]-[hash].js',
        entryFileNames: 'assets/images/[name]-[hash].js'
      }
    }
  }
})