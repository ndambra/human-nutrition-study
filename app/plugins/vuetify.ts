import { createVuetify } from "vuetify";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true, // Crucial for proper Nuxt Server-Side Rendering
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme: {
          dark: false,
          colors: {
            primary: "#1E463E", // 0F4C43
            secondary: "#6B8E23", // 5A8F76
            accent: "#E28743",
            background: "#F8F9FA",
            surface: "#FFFFFF",
          },
        },
        darkTheme: {
          dark: true,
          colors: {
            primary: "#8114e1",
            secondary: "#03dac5",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
