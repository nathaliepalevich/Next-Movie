<template>
  <footer class="footer-container centerContent">
    <div class="centerContent d-flex flex-column align-center">
      <img class="next-logo" src="@/assets/icons/favicon.svg" alt="logo" />
      <h2 data-test="contact-title" class="mt-6">{{ $t('footer.contact') }}</h2>
      <div class="text-center mt-3">
        <p data-test="email"><a  :href="email" target="_blank">{{emailStr}}</a></p>
        <p>{{ $t('footer.openingDays') }} | {{ $t('footer.openingHours') }}</p>
      </div>
      <div class="d-flex mt-8">
        <div data-test="social-media" class="logo-container" v-for="sm in smData" :key="sm.alt">
          <a :href="sm.link" target="_blank">
            <img :src="sm.icon" :alt="sm.alt" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { socialMediaLinks, emailLink } from "@/utils/links.js";

export default {
  name: "Footer",
  data() {
    return {
      smData: '',
      email: '',
      emailStr: ''
    };
  },
  mounted() {
    this.smData = socialMediaLinks;
    this.email = emailLink.href;
    this.emailStr = emailLink.emailStr;
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
  font: $normal 16px $georgia;
  h2 {
    font: $normal 33px $georgia;
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
