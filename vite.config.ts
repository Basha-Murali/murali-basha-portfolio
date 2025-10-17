import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: ".", // always use current dir as root
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
});


