import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import Inspector from "vite-plugin-react-inspector";

export default defineConfig({
  plugins: [
    react(),
    Inspector(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
