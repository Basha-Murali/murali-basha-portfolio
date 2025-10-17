import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  // Force Vite to treat THIS folder as root — even if Vercel uses ./ or subdir
  root: process.cwd(),
  plugins: [react()],
  base: "./", // ensures assets load correctly on relative paths
  build: {
    outDir: "dist",
    rollupOptions: {
      // force absolute path for index.html to avoid /vercel/path0 mismatch
      input: resolve(process.cwd(), "index.html"),
    },
  },
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"), // allows @ imports
      "/src": resolve(process.cwd(), "src"), // fixes absolute path resolution
    },
  },
});

