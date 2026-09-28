import { createVuetify } from "vuetify";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true, // Crucial for proper Nuxt Server-Side Rendering
    theme: {
      defaultTheme: "customDark",
      themes: {
        customDark: {
          dark: true,
          colors: {
            primary: "#bb86fc",
            secondary: "#03dac5",
          },
        },
        customLight: {
          dark: false,
          colors: {
            primary: "#8114e1",
            secondary: "#03dac5",
          }
        }
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
