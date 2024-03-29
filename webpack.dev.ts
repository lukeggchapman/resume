import path from 'path'
import merge from 'webpack-merge'
import webpack, { Configuration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import common from './webpack.common'

module.exports = merge<Configuration & WebpackDevServerConfiguration>(common, {
  mode: 'development',
  entry: './dev/index.tsx',
  resolve: {
    alias: {
      'luke-chapman-resume': path.resolve(__dirname, 'src'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dev'),
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
