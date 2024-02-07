<template>
  <div class="button-container d-flex mt-auto">
    <button
      @click="$emit('button-clicked', 'clicked')"
      :class="{ active: isOpen }"
    >
      <span>{{ btnText }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalButton',
  props: {
    btnText: {
      type: String,
      default: "",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  height: 42px;
  display: flex;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 100px;
  align-items: center;
  button {
    display: flex;
    justify-content: space-between;
    margin: 0 17px;
    width: $full-width;
    align-items: center;
    font: $normal 18px $arial;
    span {
      font: 18px;
    }
    &.active {
      &::before {
        @include arrowIcon();
        transform: scaleX(-1);
      }
    }
    &:not(.active) {
      &::after {
        @include arrowIcon();
        transform: scaleX(1);
      }
    }
  }
}
@media screen and (max-width: 920px) {
  .button-container {
    height: 36px;
    font-size: 14px;
    span {
      font-size: 12px;
    }
  }
}
</style>
