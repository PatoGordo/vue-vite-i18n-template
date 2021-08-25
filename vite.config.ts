import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, "./src/i18n/locales/**"),
    }),
    VitePWA({
      manifest: {},
      workbox: {},
    }),
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
