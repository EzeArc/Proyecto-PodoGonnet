import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base:
    process.env.NODE_ENV === "production"
      ? process.env.VITE_BASE_URL || "/Proyecto-PodoGonnet"
      : "/",

  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
