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
    // build: {
    //   rollupOptions: {
    //     // Replace 'problematic-package' with the actual name of the library causing the error
    //     external: ['vitejs'],
    //   },
    // },
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
