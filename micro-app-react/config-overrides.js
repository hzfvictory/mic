const path = require('path');
const packageName = require('./package.json').name;

module.exports = {
  webpack: (config) => {
    // https://webpack.docschina.org/guides/author-libraries/#expose-the-library

    // 微应用的包名，这里与主应用中注册的微应用名称一致
    config.output.library = `${packageName}`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式,默认是自执行函数，外界拿不到`${packageName}`里面的方法
    config.output.libraryTarget = 'umd';
    // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
    config.output.jsonpFunction = `webpackJsonp_${packageName}`;

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // 关闭主机检查，使微应用可以被 fetch
      config.disableHostCheck = true;
      // 配置跨域请求头，解决开发环境的跨域问题
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // 配置 history 模式
      config.historyApiFallback = true;

      config.hot = true;
      config.open = false; // 子应用设置false
      return config;
    };
  },
};
