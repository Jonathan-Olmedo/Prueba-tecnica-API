const config = {
  collectCoverageFrom: [
    'pages/*.js',
    'components/*.js',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  roots: [
    '<rootDir>',
  ],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  verbose: true
}

module.exports = config