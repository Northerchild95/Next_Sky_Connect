import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/app/(.*)$": "<rootDir>/src/app/$1", // <-- Agrega esto// ✅ Permite usar imports con "@/"
  },
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"], // ✅ Asegura que Jest encuentre los tests
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { presets: ["next/babel"] }], // ✅ Asegura compatibilidad con TS y JSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // ✅ Opcional: Configuración extra para pruebas
  moduleDirectories: ["node_modules", "<rootDir>/src"], // ✅ Asegura que Jest resuelva correctamente los módulos
};

export default createJestConfig(config);
