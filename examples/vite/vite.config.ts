import { defineConfig } from 'vite';
//  @ts-ignore
import UnpluginLodashToLodashes from 'unplugin-lodash-to-lodashes/vite';

export default defineConfig({
  plugins: [
    UnpluginLodashToLodashes(),
  ],
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      fileName: 'index',
      name: 'index',
      formats: ['es', 'cjs']
    }
  }
})