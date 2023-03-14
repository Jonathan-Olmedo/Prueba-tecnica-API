const config = {
    collectCoverageFrom: [
      '*/.{js,jsx}',
      '!*/node_modules/*',
      '!*/cypress/*',
      '!*/.next/*',
      '!*/utils/*',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/cypress/',
      '/.next/',
      '/utils/'
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