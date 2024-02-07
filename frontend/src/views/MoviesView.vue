<template>
  <Header data-test="header-component" />
  <Main data-test="main-component" />
  <Footer data-test="footer-component" />
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "MoviesView",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
