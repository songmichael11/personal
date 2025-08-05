import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), flowbiteReact()],
  base: process.env.VITE_BASE_PATH || "/personal",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})