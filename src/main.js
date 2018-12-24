import "@babel/polyfill";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue-typehead";
import "./plugins/vue-session";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";

import "./lib/css";
import "./lib/script";
import "./lib/global";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
