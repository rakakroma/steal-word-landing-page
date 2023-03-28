import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  // corePlugins: {
  //   // https://stackoverflow.com/questions/71227760/make-tailwind-favor-rgba-instead-of-rgb-var-tw-text-opacity
  //   backdropOpacity: false,
  //   backgroundOpacity: false,
  //   borderOpacity: false,
  //   divideOpacity: false,
  //   ringOpacity: false,
  //   textOpacity: false,
  // },
  plugins: [
    react(),
    legacy({
      targets: ["supports es6-module"],
    }),
  ],
  base:
    process.env.NODE_ENV === "production" ? "/steal-word-landing-page/" : "/",
});
