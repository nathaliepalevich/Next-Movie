<template>
  <div class="search-container">
    <v-select
      :label="$t('search.selectLabel')"
      class="select-input"
      :items="items"
      v-model="searchBy"
      :disabled="!movies.length"
      density="compact"
      variant="outlined"
    ></v-select>
    <v-text-field
      append-inner-icon="mdi-magnify"
      class="search-input"
      :label="searchByLabel"
      v-model="searchStr"
      @input="filterMovies"
      variant="underlined"
      :disabled="!searchBy"
      density="compact"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'SearchMovie',
  props: {
    movies: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      searchStr: "",
      searchBy: "",
      searchByLabel: "",
      items: [
        { title: this.$t("search.title"), value: "title" },
        { title: this.$t("search.description"), value: "synopsis" },
        { title: this.$t("search.released"), value: "released" },
        { title: this.$t("search.rating"), value: "rating" },
      ],
    };
  },
  watch: {
    searchBy(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.searchStr = "";
        this.$emit("filtered-movies", this.movies);
        this.searchByLabel = this.items.find(
          (item) => item.value === newVal
        ).title;
      }
    },
  },

  methods: {
    filterMovies() {
      let filtered = this.movies.filter((movie) =>
        movie[this.searchBy]
          .toLowerCase()
          .includes(this.searchStr.toLowerCase())
      );
      this.$emit("filtered-movies", filtered);
    },
  },
};
</script>

<style>
.search-container {
  display: flex;
  padding-bottom: 45px;
}
.select-input {
  width: 300px;
  margin-right: 20px;
}
.search-input {
  width: 400px;
}
@media screen and (max-width: 920px) {
  .search-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-bottom: 0;
    align-items: center;
  }
  .search-input {
    width: 300px;
  }
  .select-input {
    width: 200px;
  }
}
</style>
