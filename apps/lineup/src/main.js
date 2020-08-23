import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  MdField,
  MdCard,
  MdDatepicker,
  MdButton,
  MdDialog
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css";

Vue.use(MdField);
Vue.use(MdCard);
Vue.use(MdDatepicker);
Vue.use(MdButton);
Vue.use(MdDialog);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
