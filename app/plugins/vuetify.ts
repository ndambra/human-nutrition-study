import { createVuetify } from "vuetify";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true, // Crucial for proper Nuxt Server-Side Rendering
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: true,
          colors: {
            background: "#0f172a", // slate-900
            surface: "#020617", // slate-950
            primary: "#10b981", // Emerald green
            secondary: "#f59e0b", // Amber accent
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
