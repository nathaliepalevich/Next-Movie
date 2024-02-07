<template>
    <v-main class="main-container">
      <div class="justify-center flex-column align-center">
        <AppTitle/>
        <SearchMovie
          class="movie-margin"
          :movies="movies"
          @filtered-movies="filtered"
        />
      </div>
        <div class="justify-center flex-wrap align-center">
          <Movies v-if="filteredMovies" :movies="filteredMovies" />
          <h2 class="mb-7"  v-if="!filteredMovies?.length">{{ errorMessage }}</h2>
        </div>
    </v-main>
</template>

<script>
import movieService from "@/services/movieService";
export default {
  name: 'Main',
  data() {
    return {
      movies: [],
      filteredMovies: undefined,
      errorMessage: "",
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await movieService.getAllMovies();
        this.movies = response.data;
        this.filteredMovies = [...this.movies];
      } catch (error) {
        this.errorMessage = this.$t('main.errorServer');
      }
    },
    filtered(movies) {
      this.filteredMovies = [...movies];
      this.errorMessage = this.filteredMovies?.length ? "" : this.$t('main.errorNoMovies');
    },
  },
};

</script>

<style lang="scss" scoped>
.main-container {
  background-color: $primary;
}
.justify-center {
  display: flex;
  justify-content: center;
}
.movie-margin {
  margin-right: 40px;
}
@media screen and (max-width: 920px) {
  .movie-margin {
    margin-right: 0;
  }
}
</style>