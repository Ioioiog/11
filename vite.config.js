import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import Pages from 'vite-plugin-pages';
import path from 'path';

// Define base path
const BASE_PATH = '/';

export default defineConfig({
  base: BASE_PATH,
  define: {
    'process.env.BASE_PATH': JSON.stringify(BASE_PATH)
  },
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