import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ShardsVue from "shards-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faYoutube,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faDiscord, faYoutube, faInstagram, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Import base styles (Bootstrap and Shards)
import "bootstrap/dist/css/bootstrap.css";
import "shards-ui/dist/css/shards.css";
import "./assets/styles/main.css";

Vue.use(ShardsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
