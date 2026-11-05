import { createVuetify } from "vuetify";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true, // Crucial for proper Nuxt Server-Side Rendering
    theme: {
      defaultTheme: "lightTheme",
      themes: {
        lightTheme: {
          dark: false,
          colors: {
            "primary": "#1E463E", // 0F4C43
            "secondary": "#6B8E23", // 5A8F76
            "accent": "#E28743",
            "background": "#F8F9FA",
            "on-background": "#334155",
            "on-surface": "#334155",
            "surface": "#FFFFFF",
          },
        },
        darkTheme: {
          dark: true,
          colors: {
            "primary": "#6EABA0", // 0F4C43
            "secondary": "#8CB833", // 5A8F76
            "accent": "#F49E59",
            "background": "#121615",
            "surface": "#1A201E",
            "on-background": "#E2E8F0",
            "on-surface": "#E2E8F0",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
