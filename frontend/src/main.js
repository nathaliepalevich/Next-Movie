// main.js
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createI18n } from "vue-i18n";
import { en } from "./locales/en/index";

loadFonts();

const i18n = createI18n({
  locale: "en",
  messages: en,
});

createApp(App).use(vuetify).use(i18n).mount("#app");
