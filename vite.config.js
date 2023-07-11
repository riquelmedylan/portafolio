import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glsl"],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
});
