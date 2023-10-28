import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import paths from "vite-tsconfig-paths";
import svg from "vite-svg-loader";
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), paths(), svg()],
})
