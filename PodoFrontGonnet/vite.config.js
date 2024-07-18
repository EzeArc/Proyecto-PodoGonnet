import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: import.meta.env.VITE_BASE_URL,

  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
