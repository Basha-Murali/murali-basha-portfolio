import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: ".", // 👈 tells Vite to treat ./ as root (what Vercel uses)
  plugins: [react()],
  base: "./", // 👈 ensures relative paths in production
  build: {
    outDir: "dist",
    rollupOptions: {
      input: resolve(__dirname, "index.html"), // 👈 absolute path fix for Vercel
    },
  },
});
