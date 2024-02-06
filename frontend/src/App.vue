<template>
  <v-app>
    <Header data-test="header-component" />
    <Main data-test="main-component"/>
      <Footer data-test="footer-component"/>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>