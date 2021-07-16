import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store, //store:store 和router一样，将创建的Vuex实例挂载到这个vue实例中
  render: (h) => h(App),
}).$mount("#app");
