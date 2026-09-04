import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2026-09-02",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
