import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE_URL || "/mulheres-na-tecnologia/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "copy-404",
      apply: "build",
      generateBundle() {
        // Copiar 404.html para o dist após o build
        const src = path.resolve(__dirname, "./404.html");
        const dst = path.resolve(__dirname, "./dist/404.html");
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dst);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
}));
