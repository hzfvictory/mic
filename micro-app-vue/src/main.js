import Vue from 'vue'

import App from './App.vue'
import routes from './router'
import store from "./store"

import "./plugins/element"
import "./plugins/selfCom"

import "./public-path";


import "normalize.css"
import "./index.less"
import VueRouter from "vue-router";

import actions from "./shared/actions"
import reduxStore from "./shared/store"

Vue.config.productionTip = false;
Vue.config.silent = true;


//  全局的方法
Vue.prototype.$fetch = (url, options) => {
  return fetch(url, options).then(e => e.json()).then(val => {
    return val
  });
};


let instance = null;
let router = null;

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */
function render(props) {
  const {container} = props || {};
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
    reduxStore.setStore(props.store)
    if (props.store) {
      // 注入redux 实例
      reduxStore.setStore(props.store)
    }
  }

  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  router = new VueRouter({
    // 运行在主应用中时，添加路由命名空间 /vue
    base: window.__POWERED_BY_QIANKUN__ ? props.basePath : "/",
    mode: "history",
    routes,
  });


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  }

  // 挂载应用
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}


function createEvent(params, eventName = 'emit') {
  return new CustomEvent(eventName, {detail: params});
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  window.cEvt = createEvent({
    handelData: () => console.warn('不能运行'),
    jumpUrl: () => console.warn('不能运行')
  })

  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("vueMicroApp bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("vueMicroApp mount", props);
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  console.log("vueMicroApp unmount");
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
