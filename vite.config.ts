import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    host: "localhost",
    port: 5000,
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
      "@": path.resolve(__dirname, "src"),
      IMG: path.resolve(__dirname, "src/assets/images"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import './src/style/variable.scss';",
        javascriptEnabled: true,
      },
    },
  },
});
