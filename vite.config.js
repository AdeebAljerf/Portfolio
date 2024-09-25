import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    assetsDir: "assets",
  },
  // server: {
  //   port: 3000, // or any other available port
  // },
});
