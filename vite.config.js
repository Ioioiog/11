import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/11/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/images/[name].[ext]',
        chunkFileNames: 'assets/images/[name]-[hash].js',
        entryFileNames: 'assets/images/[name]-[hash].js'
      }
    }
  }
})