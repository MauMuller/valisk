import { defineConfig } from "vite";
import { resolve } from "path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "lib",
      formats: ["es", "umd"],
      fileName: (format) => `lib.${format}.js`,
    },
  },
});
