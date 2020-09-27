import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store"

import "./plugins/element"
import "./plugins/selfCom"

import startQiankun from "./micro";

import "normalize.css"
import "./index.less"

Vue.config.productionTip = false;
Vue.config.silent = true;

/**
 * $fetch
 * @param  {string} url 请求地址
 * @param  {object} options 额外的参数
 */

/*全局的方法*/
Vue.prototype.$fetch = (url, options) => {
  return fetch(url, options).then(e => e.json()).then(val => val);
};

/*全局自定义指令*/
Vue.directive('gFocus', {
  inserted: function (el) {
    el.focus()
  }
});

/*vuex*/
window._store = store


/*
* prefetch  预渲染
* singular  是否为 单实例 场景
* sandbox   是否开启沙箱  关闭后兼容IE（但要承担关掉沙箱后子应用之间可能造成冲突的风险）
* fetch     自定义的fetch方法
* */

startQiankun({singular: true, prefetch: true, sandbox: true});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
