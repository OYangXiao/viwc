import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //   },
  // },
  alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  clearScreen: false,
  plugins: [vue()],
  build: {
    manifest: true,
    rollupOptions: {
      external: ['vue'],
      input: {
        vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-browser.prod.js'),
        homepage: path.resolve(__dirname, 'pages/homepage/index.html'),
        'user-list': path.resolve(__dirname, 'components/user-list/index.ts'),
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].[hash].js',
      },
      plugins: [nodeResolve()],
    },
  },
});
