/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common'

module.exports = merge<Configuration>(common, {
  mode: 'production',
  entry: './src',
  devtool: 'source-map',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `${path.resolve(__dirname, 'dist')}/`,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
})
