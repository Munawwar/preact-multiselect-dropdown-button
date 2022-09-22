const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/', '/scripts/', '/public/', '/config/'],
  setupFilesAfterEnv: [path.resolve(__dirname, './src/setupTests.js')],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.(jsx|js)', '!src/**/*.mock.js', '!src/**/*.d.ts'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 20
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/dist/', '/scripts/', '/public/', '/config/'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/', '/scripts/', '/public/', '/config/']
};