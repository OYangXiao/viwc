import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') },
      { find: 'vue', replacement: path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-browser.js') },
    ],
  },
  clearScreen: false,
  plugins: [vue()],
  build: {
    // manifest: true,
    rollupOptions: {
      input: {
        'user-list': path.resolve(__dirname, 'src/components/user-list/user-list.ts'),
        'user-info': path.resolve(__dirname, 'src/components/user-info/user-info.ts'),
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].[hash].js',
      },
    },
  },
});
