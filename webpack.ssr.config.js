const path = require('path');
const nodeExternals = require('webpack-node-externals');

let rootPath = path.resolve(__dirname);

module.exports = {
  mode: 'production',
  devtool: 'source-map',

  entry: './src/components/MyComponent.js',

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'ssr'),
    filename: 'ssr-bundle.js',
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(rootPath, 'src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
};
