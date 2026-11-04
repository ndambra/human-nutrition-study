<script setup lang="ts">
import { useTheme } from "vuetify";

const theme = useTheme();
const drawer = ref(false);
const items = [
  {
    title: "Home",
    value: "home",
    link: "/",
    type: "link",
  },
  // { type: "divider" },
  {
    title: "Nutrient Metabolism",
    value: "metabolism",
    link: "/metabolism",
    type: "link",
  },
  {
    title: "Clinical",
    value: "clinical",
    link: "/clinical",
    type: "link",
  },
  {
    title: "Nutritional Assessment",
    value: "nutritional-assessment",
    link: "/nutritional-assessment",
    type: "link",
  },
  { type: "divider" },
  {
    title: "Study Tools",
    value: "study-tools",
    link: "/study-tools",
    type: "link",
  },
];

// const loginBtnColor = computed(() => theme.current.value.dark ? "primary" : "surface");
const darkModeColor = computed(() => theme.current.value.dark ? "surface" : "primary");
const user = "ndambra";

const toggleIcon = computed(() => {
  return theme.current.value.dark ? "mdi-weather-sunny" : "mdi-moon-waning-crescent";
});

function toggleTheme() {
  if (theme.current.value.dark) {
    theme.change("myTheme");
  }
  else {
    theme.change("darkTheme");
  }
}
</script>

<template>
  <v-app>
    <v-app-bar
      order="0"
      class="pe-3"
      :color="darkModeColor"
    >
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
          color="secondary"
          to="/login"
        >
          Login
        </v-btn>
        <v-btn
          v-else
          variant="elevated"
          rounded="md"
          color="secondary"
        >
          {{ user }}
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list density="compact" nav>
        <template v-for="item in items" :key="item.title">
          <v-divider v-if="item.type === 'divider'" class="my-2" />
          <v-list-item
            v-else
            :title="item.title"
            :value="item.value"
            :to="item.link"
            color="secondary"
          />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
