import path from 'path'

export default {
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
  },
  optimization: {
    minimize: false,
  },
}
