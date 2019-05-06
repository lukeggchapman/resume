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
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
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
    'import/prefer-default-export': 'off', // Allow single Named-export

    /**
     * @description rules of @typescript-eslint
     */
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
    'react/prop-types': 'off', // we're relying on TS prop interfaces for this

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
        '@typescript-eslint/no-var-requires': 'off', // gatsby still uses nodes default var require
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'], // jest test files
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ], // Allow tests to import from devDependencies without error
        '@typescript-eslint/no-explicit-any': 'off', // Allow tests to use explicit any on mock values
      },
    },
  ],
}
