const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let rootPath = path.resolve(__dirname);

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  entry: [
    './src/index',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: './src/pages/index.html',
    }),
  ],

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
  devServer: {
    port: 8067,
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
