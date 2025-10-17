import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: ".", // tells Vite ./ is root (Vercel default)
  plugins: [react()],
  base: "./", // ensures correct asset paths
  build: {
    outDir: "dist",
    rollupOptions: {
      // 👇 This line is key — explicitly point to your index.html
      input: resolve(__dirname, "index.html"),
    },
  },
  resolve: {
    // 👇 Fix absolute imports like /src/main.tsx
    alias: {
      "/src": resolve(__dirname, "src"),
    },
  },
});
