import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  server: {
    host: "127.0.0.1",
    allowedHosts: [
      "appbus.online",
      "www.appbus.online",
      "sistema.appbus.online",
      "engine.appbus.online",
      "localhost",
      "127.0.0.1",
    ],
  },
  preview: {
    host: "127.0.0.1",
    allowedHosts: [
      "appbus.online",
      "www.appbus.online",
      "sistema.appbus.online",
      "engine.appbus.online",
      "localhost",
      "127.0.0.1",
    ],
  },
  build: {
    outDir: "dist-spa",
    emptyOutDir: true,
  },
});
