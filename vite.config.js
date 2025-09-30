import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/khall-portfolio/",
  build: {
    outDir: "docs",
    emptyOutDir: true
  },
});
