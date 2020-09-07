import {Notification} from 'element-ui';

/*进度条插件*/
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
  removeGlobalUncaughtErrorHandler
} from "qiankun";

/*子应用注册信息*/
import apps from "./apps";

/**
 * registerMicroApps
 * @param  {array} apps - 必选，子应用的一些注册信息
 * @param  {function} lifeCycles - 可选，全局的子应用生命周期钩子
 * @param  {object} opts - 可选
 *            fetch - Function - 可选
 *            getPublicPath - (url: string) => string - 可选
 *            getTemplate - (tpl: string) => string - 可选
 */

registerMicroApps(apps, {
  /*qiankun 生命周期钩子 - 加载前*/
  beforeLoad: (app) => {
    // 加载子应用前，加载进度条
    NProgress.start();
    NProgress.set(0.4);

    console.info(`%c挂载前 ${app.name}`, `color:rgb(255, 208, 75);font-size:18px;`);
    return Promise.resolve();
  },
  /*qiankun 生命周期钩子 - 挂载后*/
  afterMount: (app) => {
    // 加载子应用前，进度条加载完成
    NProgress.done();
    console.info(`%c挂载后 ${app.name}`, `color:rgb(255, 208, 75);font-size:18px`);
    return Promise.resolve();
  },
});

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const {message: msg} = event;
  /*加载失败时提示*/
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    Notification({
      title: '加载失败',
      message: '子应用加载失败，请检查应用是否可运行',
      type: 'error'
    });
  }
});

removeGlobalUncaughtErrorHandler((err) => {
  console.error('移除未捕获的错误', err);
  return false
})

/*导出 qiankun 的启动函数*/
export default start;
