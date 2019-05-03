// Thanks to https://gist.github.com/1natsu172/a65a4b45faed2bd3fa74b24163e4256e

const jsExtensions = ['.js', '.jsx']
const tsExtensions = ['.ts', '.tsx']
const allExtensions = jsExtensions.concat(tsExtensions)

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    sourceType: 'module',
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1285
     * import/named requires 'typescript-eslint-parser'
     */
    // 'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1285
     * import/named requires 'typescript-eslint-parser'
     */
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
        paths: ['./src'],
      },
    },
  },
  rules: {
    /**
     * @description rules of eslint official
     */
    /**
     * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
     * "import/named" temporary disable.
     */
    'import/named': 'off',
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    'import/export': 'off',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions
    /**
     * @description rules of @typescript-eslint
     */
    '@typescript-eslint/prefer-interface': 'off', // also want to use "type"
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    /**
     * @description rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // Is this incompatible with TS props type?
    /**
     * @description rules of eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error',
    /**
     * @description rules of eslint-plugin-prettier
     */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'], // gatsby framework node files
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // gatsby still use nodes default var require
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'], // jest test files
      rules: {
        /**
         * Allow tests to import from devDependencies without error
         */
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        /**
         * Allow tests to use explicit any on mock values
         */
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
