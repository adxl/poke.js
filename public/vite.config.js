import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve("./src/api"),
      "@pages": path.resolve("./src/pages"),
      "@hooks": path.resolve("./src/hooks"),
      "@components": path.resolve("./src/components"),
    },
  },
  plugins: [react()],
});
