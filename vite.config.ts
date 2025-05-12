import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    host: true,
    port: 3264,
    strictPort: true,
  },
  plugins: [react(), tailwindcss(), svgr()],
});