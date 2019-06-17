/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import merge from 'webpack-merge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import common from './webpack.common'

module.exports = merge(common, {
  mode: 'development',
  entry: './dev/index.tsx',
  resolve: {
    alias: {
      'luke-chapman-resume': path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'inline-source-map',
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
})
