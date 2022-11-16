import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "src/"),
        "@assets": path.resolve(__dirname, "src", "assets/"),
        "@pages": path.resolve(__dirname, "src", "pages/"),
        "@hooks": path.resolve(__dirname, "src", "hooks/"),
        "@utils": path.resolve(__dirname, "src", "utils/"),
        
    },
},
})
