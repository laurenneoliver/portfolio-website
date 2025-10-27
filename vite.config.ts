// vite.config.ts
import { defineConfig } from "vitest/config"; // ← note this import
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    // globals: true, // if you want "describe/it/expect" without imports
  },
});
