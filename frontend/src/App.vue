<template>
  <v-app data-test="movies-view">
    <MoviesView />
  </v-app>
</template>

<script>
import MoviesView from "@/views/MoviesView.vue";

export default {
  name: "App",
  components: {
    MoviesView,
  },
};
</script>
