import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  clearScreen: false,
  plugins: [vue()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        homepage: path.resolve(__dirname, 'pages/homepage.html'),
        'user-list': path.resolve(__dirname, 'src/components/user-list/index.ts'),
        'user-info': path.resolve(__dirname, 'src/components/user-info/index.ts'),
        'base-css': path.resolve(__dirname, 'src/styles/base.css'),
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].[hash].js',
        manualChunks:{
          vue:['vue'],
        }
      },
    },
  },
});
