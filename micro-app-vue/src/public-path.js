if (window.__POWERED_BY_QIANKUN__) {
  /*动态设置 webpack publicPath，防止资源加载出错，出现404等问题*/
  /*window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;   获取是当前微应用的 origin  */
  /*eslint-disable-next-line no-undef*/
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
