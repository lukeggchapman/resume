/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './dev/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.md$/,
        use: 'gray-matter-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      content: path.resolve(__dirname, 'content'),
      'luke-chapman-resume': path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    publicPath: '/',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dev/index.html',
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
