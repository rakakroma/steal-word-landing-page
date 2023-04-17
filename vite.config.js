import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    legacy({
      targets: ["supports es6-module"],
    }),
  ],
  base:
    process.env.NODE_ENV === "production" ? "/steal-word-landing-page/" : "/",
});
