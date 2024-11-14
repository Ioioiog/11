import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import Pages from 'vite-plugin-pages';
import path from 'path';

export default defineConfig({
  base: './', 
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages', // Directory where page components are stored
      extensions: ['vue', 'js', 'ts', 'jsx', 'tsx'], // Supported file extensions
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    }
  }
});