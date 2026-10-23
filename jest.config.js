const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "@/components/*": ["components/*"],
    "@/lib/*": ["lib/*"],
    "@/hooks/*": ["hooks/*"],
  },
};

module.exports = createJestConfig(customJestConfig);
