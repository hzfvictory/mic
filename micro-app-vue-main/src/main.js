import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store"

import "./plugins/element"
import "./plugins/selfCom"

import "normalize.css"
import "./index.less"

Vue.config.productionTip = false;
Vue.config.silent = true;

import startQiankun from "./micro";

/**
 * $fetch
 * @param  {string} url 请求地址
 * @param  {object} options 额外的参数
 */

//  全局的方法
Vue.prototype.$fetch = (url, options) => {
  return fetch(url, options).then(e => e.json()).then(val => {
    return val
  });
};

// 全局自定义指令
Vue.directive('gFocus', {
  inserted: function (el) {
    el.focus()
  }
});
// vuex
window._store = store

startQiankun();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
