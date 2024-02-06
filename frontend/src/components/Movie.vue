<template>
  <div class="movie-card">
    <img class="movie-image" :src="movie.image" alt="movie-image" />
    <div class="movie-details">
      <span class="multiline-truncate mt-2" v-html="getFormatTitle"> </span>
      <v-tooltip activator="parent" location="top">
        <span v-html="getFormatTitle"></span>
      </v-tooltip>
      <Rating :rating="movie.rating" />
      <ModalButton
        :isOpen="false"
        :btnText="'Read more'"
        @button-clicked="openDetails"
      />
    </div>
  </div>
  <MovieModal
    v-if="isModalOpen"
    class="button-modal"
    :isModalOpen="isModalOpen"
    :movie="movieDeatails"
    @close-modal="openDetails"
  />
</template>

<script>

export default {
  data() {
    return {
      isModalOpen: false,
      show: true,
    };
  },
  props: {
    movie: {
      type: Object,
      default: {},
    },
  },
  computed: {
    getRating() {
      return this.movie?.rating ? this.movie.rating : 0;
    },
    getFormatTitle() {
      return this.movie.title + " " + "(" + this.movie.released + ")";
    },
    movieDeatails() {
      return {
        title: this.movie.title,
        runtime: this.movie.runtime,
        synopsis: this.movie.synopsis,
        image: this.movie.image,
        released: this.movie.released,
        rating: this.movie.rating,
      };
    },
  },
  methods: {
    openDetails() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 580px;
  margin-right: 15px;
  margin-bottom: 95px;
  font: $normal 30px/31px $georgia;
  .movie-image {
    width: 260px;
    height: 385px;
  }
  .movie-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 20px;
    .multiline-truncate {
      height: 65px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      white-space: break-spaces;
    }
  }
  .button-modal {
    width: $full-width;
  }
}

@media screen and (max-width: 920px) {
  .movie-card {
    width: 144px;
    height: 360px;
    margin-right: 7px;
    margin-bottom: 55px;
    font: $normal 20px/21px $georgia;
    .movie-image {
      height: 214px;
      width: 144px;
    }
  }
}
</style>
