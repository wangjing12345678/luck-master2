import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import './utils/rem.js'
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import publicCom from "publish-project-wang-only";
// publicCom.install(Vue);
// Vue.component('wangTest',publicCom.WangTest)
// console.log(publicCom.WangTest)

Vue.config.productionTip = false;

Vue.use(ElementUI);
console.log(Vue.prototype);

// Vue.prototype.$button.config(
//   {
//     type:'danger'
//   }
// )
// 引入echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});


app.$mount("#app");

// publicCom.install(app)
