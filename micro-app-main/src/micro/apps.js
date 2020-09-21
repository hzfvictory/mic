function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "reactMicroApp",
    entry: "//localhost:10100",
    container: "#frame1",
    activeRule: genActiveRule("/menu/react")
  },
  {
    name: "vueMicroApp",
    entry: "//localhost:10200",
    container: "#frame1",
    activeRule: "/vue"
  },
  // {
  //   name: "angularMicroApp",
  //   entry: "//localhost:10300",
  //   container: "#frame",
  //   activeRule: "/angular"
  // },
  {
    name: "staticMicroApp",
    entry: "//localhost:10400",
    container: "#frame1",
    activeRule: genActiveRule("/menu/static")
  },
];

export default apps;
