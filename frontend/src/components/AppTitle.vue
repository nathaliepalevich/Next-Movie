<template>
  <div class="justify-center flex-column align-center">
    <h1 data-test="title" class="title text-uppercase">
      Explore your next Movies and tv shows
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font: $normal-bold 80px/66px $arial;
  text-align: center;
  width: 55%;
  padding-top: 115px;
  padding-bottom: 50px;
}
@media screen and (max-width: 920px) {
  .title {
    font: $normal-bold 27px/25px $arial;
    text-transform: uppercase;
    padding: 34px 0;
    width: $full-width;
  }
}
</style>
