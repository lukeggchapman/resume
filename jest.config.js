const esmModules = [
  'decode-named-character-reference',
  'fault',
  'mdast-util.*',
  'micromark.*',
  'trim-lines',
  'unist-util.*',
  'yaml',
]

module.exports = {
  testRegex: '(\\.|/)(test|spec)\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.ts',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: [`/node_modules/(?!(${esmModules.join('|')})/)`],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setupJest.ts'],
  snapshotSerializers: [require.resolve('snapshot-diff/serializer.js')],
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/types/**/*',
    '!src/**/index.ts',
  ],
  preset: 'ts-jest/presets/js-with-babel',
}
