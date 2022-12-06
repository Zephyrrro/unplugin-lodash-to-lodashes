import path from 'path';
import { defineConfig } from 'vite';
import UnpluginLodashToLodashes from 'unplugin-lodash-to-lodashes/vite';

export default defineConfig({
  plugins: [
    UnpluginLodashToLodashes({ lib: path.resolve('node_modules/lodash-es') }),
  ],
  build: {
    minify: false,
    lib: {
      entry: ['./src/index.ts', './src/commonjs.js'],
      name: 'index',
    }
  }
})