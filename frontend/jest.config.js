module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    "^axios$": "axios/dist/node/axios.cjs",
  },

};
