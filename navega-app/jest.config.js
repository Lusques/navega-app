module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!@angular|@ngrx|primeng|primeicons)",
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      isolatedModules: true,
    },
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
};
