<template>
  <header class="flex">
    <img
      data-test="img-logo"
      src="@/assets/icons/Logo2.png"
      alt="header_logo"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  img {
    position: absolute;
    left: 100px;
    top: 23px;
  }
}

@media screen and (max-width: 920px) {
  header {
    height: 75px;
    img {
      left: 10px;
      top: 10px;
      width: 157px;
      height: 50px;
    }
  }
}
</style>
