<template>
  <div class="footer-container centerContent">
    <div class="centerContent d-flex flex-column align-center">
      <img class="next-logo" src="@/assets/icons/favicon.svg" alt="logo" />
      <h2 class="mt-6">Contact us</h2>
      <div class="text-center mt-3">
        <p><a :href="email" target="_blank">support@nextmovies.com</a></p>
        <p>Mon – Fri | 6:00am – 5:00 pm PT</p>
      </div>
      <div class="d-flex mt-8">
        <div class="logo-container" v-for="sm in smData" :key="sm.alt">
          <a class="" :href="sm.link" target="_blank">
            <img :src="sm.icon" :alt="sm.alt" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { socialMediaLinks, emailLink } from "@/utils/links.js";

export default {
  name: "Footer",
  data() {
    return {
      smData: undefined,
      email: undefined,
    };
  },
  mounted() {
    this.smData = socialMediaLinks;
    this.email = emailLink.href;
  },
};
</script>

<style lang="scss" scoped>
.centerContent {
  @include centerContent;
}
.footer-container {
  background-color: $footer-background;
  color: $footer-color;
  width: $full-width;
  height: 300px;
  font: $normal 16px/21px $georgia;
  h2 {
    font: $normal 33px/37px $georgia;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .logo-container {
    display: flex;
    margin-right: 39px;

    &:last-child {
      margin-right: 0;
    }
  }
  .next-logo {
    width: 40px;
    height: 40px;
  }
}
</style>
