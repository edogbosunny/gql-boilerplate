module.exports = {
    "testEnvironment": "node",
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "collectCoverageFrom": [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
      ]
  } 