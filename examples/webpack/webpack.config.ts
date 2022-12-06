const UnpluginLodashToLodashes = require('unplugin-lodash-to-lodashes/webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    clean: true,
    filename: 'index.js',
  },
  optimization: {
    minimize: false,
    chunkIds: 'named',
    moduleIds: 'named',
  },
  plugins: [
    UnpluginLodashToLodashes({ lib: path.resolve('node_modules/lodash-es') }),
  ],
}
