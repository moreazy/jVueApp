// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import App from "./App";
import router from "./router";
// import store from "./store";

import "@/styles/index.scss"; // global css

import i18n from "./lang"; // Internationalization
import "./icons"; // icon

// import "./errorLog"; // error log
// import "./permission"; // permission control

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Element, {
  size: "small", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

// // 测试数据 Test
// import "./mock"; // simulation data

// import * as filters from "./filters"; // global filters
// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key]);
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  // store,
  i18n,
  components: { App },
  template: "<App/>"
});
