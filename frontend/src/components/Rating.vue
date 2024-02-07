<template>
  <div class="raiting-container">
    <img src="../assets/icons/star.svg" alt="star_image" />
    {{ rating ? rating : "0" }} {{ isDetails ? "/10" : "" }}
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: String,
      default: "0",
    },
    isDetails: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.raiting-container {
  display: flex;
  align-items: center;
  font: $normal 25px/31px $arial;
  img {
    margin-right: 6.7px;
  }
}
@media screen and (max-width: 920px) {
  .raiting-container {
    font: $normal 20px/25px $arial;
    img {
      width: 20px;
    }
  }
}
</style>
