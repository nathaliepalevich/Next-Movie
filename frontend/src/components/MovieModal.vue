<template>
  <div>
    <v-dialog v-model="isOpen" activator="parent" width="1360px">
      <div class="dialog-container">
        <div class="flex">
          <v-img class="movie-image" cover :src="movie.image"></v-img>
        </div>
        <div class="right-side">
          <span
            class="multiline-truncate title text-uppercase"
            v-html="movie.title"
          >
          </span>
          <div class="content" v-html="formattedTime"></div>
          <Rating :rating="movie.rating" :isDetails="true" />
          <div class="desc-font" v-html="formattedSynopsis"></div>
          <ModalButton
            class="button-modal"
            :isOpen="true"
            :btnText="close"
            @button-clicked="$emit('close-modal', 'close')"
          />
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>

export default {
  data() {
    return {
      close: this.$t('modal.button.close')
    };
  },
  computed: {
    isOpen() {
      return this.isModalOpen;
    },
    formattedTime() {
      const runTime = this.movie.runtime;
      const hourIdx = runTime.indexOf("h");
      return `${runTime.slice(0, hourIdx + 1)} ${runTime.slice(hourIdx + 1)}`;
    },
    formattedSynopsis() {
      const idx = this.movie?.synopsis?.indexOf("<b>New ");
      if (idx >= 0) {
        return this.movie.synopsis.slice(0, idx);
      }
      return this.movie.synopsis;
    },
  },
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
    movie: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>

.dialog-container {
  background-color: white;
  padding: 50px;
  width: $full-width;
  height: 690px;
  display: flex;
  justify-content: space-around;
}

.title {
  font: $normal-bold 45px/31px $arial;
}
.multiline-truncate {
  line-height: 1;
}
.desc-font {
  font: $normal 30px/31px $georgia;
  letter-spacing: -0.6px;
  padding-left: 0;
  margin-top: 28px;
}
.right-side {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.v-card .v-card-text {
  line-height: 31px;
}
.content {
  margin-top: 10px;
  font: $normal 25px/31px $arial;
}

.movie-image {
  width: 400px;
  height: 590px;
  object-fit: cover;
}
.button-modal {
  width: 50%;
}
@media screen and (max-width: 961px) {
  .dialog-container {
    width: 294px;
    height: 671px;
    padding: 20px;
    align-self: center;
    flex-direction: column;
    justify-content: unset;
  }
  .title {
    font: $normal-bold 30px/31px $arial;
  }
  .multiline-truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    white-space: break-spaces;
    font-size: 18px;
    line-height: 1;
  }
  .right-side {
    padding-top: 6px;
    width: 256px;
    height: 100%;
  }
  .content {
    margin-top: 7px;
    font: $normal 20px/31px $arial;
  }

  .desc-font {
    margin: 22px 10px;
    font: $normal 16px/17px $georgia;
  }
  .movie-image {
    width: 256px;
    height: 380px;
  }
  .button-modal {
    width: $full-width;
  }
}
</style>
