<template>
  <v-select
    label="Sort by"
    :items="items"
    v-model="sortBy"
    variant="underlined"
  ></v-select>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      sortBy: "",
      items: [
        { title: "Name", value: "name" },
        { title: "Released: New to Old", value: "old" },
        { title: "Released: Old to New", value: "new" },
        { title: "Rating", value: "rating" },
      ],
    };
  },
  watch: {
    sortBy(newVal) {
      this.handleSelectChange(newVal);
    },
  },
  methods: {
    customSort: (a, b) => {
      const numA = parseInt(a.title, 10) || 0;
      const numB = parseInt(b.title, 10) || 0;

      if (numA === numB) {
        return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
      }

      return numA - numB;
    },
    handleSelectChange() {
      const itemsToSort = [...this.movies];

      switch (this.sortBy) {
        case "name":
          itemsToSort.sort(this.customSort);
          break;
        case "new":
          itemsToSort.sort((a, b) => a.released - b.released);
          break;
        case "old":
          itemsToSort.sort((a, b) => b.released - a.released);
          break;
        case "rating":
          itemsToSort.sort((a, b) => b.rating - a.rating);
          break;
      }

      this.$emit("sorted-movies", itemsToSort);
    },
  },
};
</script>

<style></style>
