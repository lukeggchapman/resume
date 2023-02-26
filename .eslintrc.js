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
  ],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.dev.ts',
      },
    },
  },
  rules: {
    /**
     * rules of eslint official
     */
    complexity: ['error', 5], // same as code climate

    'import/prefer-default-export': 'off', // Allow single Named-export

    'import/no-unresolved': [
      'error',
      { commonjs: true, caseSensitive: true, ignore: ['hast'] },
    ], // ignore hast as it's used only for type definitions

    'no-restricted-exports': 0, // allow "export {default} from ..."

    /**
     * rules of @typescript-eslint
     */
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type

    /**
     * rules of eslint-plugin-react
     */
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ], // also want to use with ".tsx"
    'react/prop-types': 'off', // we're relying on TS prop interfaces for this
    'react/jsx-props-no-spreading': 'off', // Using prop spreading in tests and HOCs

    /**
     * rules of eslint-plugin-prettier
     */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],

    /**
     * rules to overwrite air-bnb
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
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
