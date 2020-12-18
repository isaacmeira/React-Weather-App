const path = require('path');

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  babel: {
    plugins: ['@babel/plugin-proposal-optional-chaining'],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
