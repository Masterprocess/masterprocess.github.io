module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    '^gatsby$': '<rootDir>/node_modules/gatsby',
  },
  modulePathIgnorePatterns: ['<rootDir>/.cache/'],
};
