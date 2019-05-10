function isBabelRegister(caller) {
  return !!(caller && caller.name === '@babel/register')
}

module.exports = function(api) {
  const isRegister = api.caller(isBabelRegister)

  const browserConfig = {
    presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  }

  if (isRegister) {
    // add node only config used to mimic webpack behaviour

    return {
      ...browserConfig,
      plugins: [
        [
          'module-resolver',
          {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            root: ['./src'],
          },
        ],
        [
          'file-loader',
          {
            name: '[name]-[hash].[ext]',
            extensions: ['png', 'ttf'],
            outputPath: '/public/static',
            publicPath: './public/static',
            context: '/src',
            limit: 10000,
          },
        ],
      ],
    }
  }

  return browserConfig
}
