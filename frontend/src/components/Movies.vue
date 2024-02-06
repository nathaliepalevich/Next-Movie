<template>
  <div v-for="movie in movies" :key="movie.id">
    <Movie :movie="movie" />
  </div>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      default: [],
    },
  },
};
</script>
