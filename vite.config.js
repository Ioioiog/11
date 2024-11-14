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
      dirs: 'src/pages',
      extensions: ['vue', 'js', 'ts', 'jsx', 'tsx'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*',
          dest: 'assets/images'
        },
        {
          src: 'public/*',
          dest: '.'
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
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
});