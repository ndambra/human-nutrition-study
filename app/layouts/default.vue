<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const drawer = ref(false);
const items = [
  {
    title: "Home",
    value: "home",
    link: "/",
  },
  {
    title: "Digestion",
    value: "digestion",
    link: "/digestion",
  },
  {
    title: "Absorption",
    value: "absorption",
    link: "/absorption",
  },
  {
    title: "Nutritional Assessment",
    value: "nutritional-assessment",
    link: "/nutritional-assessment",
  },
  {
    title: "Study Tools",
    value: "study-tools",
    link: "/study-tools",
  },
];

const darkModeColor = computed(() => theme.current.value.dark ? "surface" : "primary");
const user = "ndambra";

const toggleIcon = computed(() => {
  return theme.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
});

function toggleTheme() {
  if (theme.current.value.dark) {
    theme.change("customLight");
  }
  else {
    theme.change("customDark");
  }
}
</script>

<template>
  <v-app>
    <v-app-bar class="pe-3" :color="darkModeColor">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>

      <v-app-bar-title class="cursor-pointer" @click="$router.push('/')">
        Human Nutrition Study
      </v-app-bar-title>

      <template #append>
        <v-btn
          :icon="toggleIcon"
          class="mr-2"
          variant="tonal"
          size="small"
          @click="toggleTheme"
        />
        <v-btn
          v-if="!user"
          prepend-icon="mdi-account"
          rounded="sm"
          color="primary"
          to="/login"
        >
          Login
        </v-btn>
        <v-btn
          v-else
          rounded="md"
          variant="tonal"
          color="primary"
        >
          {{ user }}
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :title="item.title"
          @click="navigateTo(item.link)"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
