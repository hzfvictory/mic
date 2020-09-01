const path = require("path");


module.exports = {
  lintOnSave: false,  // 取消eslint
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '微前端';
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    port: 9999,
    open: true,
    disableHostCheck: true,
  },
};