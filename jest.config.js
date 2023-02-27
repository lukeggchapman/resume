module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '(\\.|/)(test|spec)\\.([tj]sx?)$',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.ts',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/'],
  globals: {
    __PATH_PREFIX__: '',
  },
  setupFiles: ['<rootDir>/jest/loaderShim.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupEnzyme.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePaths: ['<rootDir>/src'],
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
}
