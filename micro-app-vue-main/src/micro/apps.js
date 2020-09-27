import store from "@/shared/store";

const isProduction = process.env.NODE_ENV === 'production';

const isEnter = isProduction ? '120.79.229.197' : 'localhost';

const genActiveRule = (routerPrefix) => {
  return location => location.pathname.startsWith(routerPrefix);
}

const isVueApp = (routerPrefix) => {
  return (location) => {
    return location.pathname.includes(routerPrefix) || location.pathname.includes('/menu/react')
  }
}


const apps = [
  /**
   * https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用  string | { scripts?: string[]; styles?: string[]; html?: string }
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 浏览器url发生变化会调用这个函数，activeRule 返回 true 时表明该子应用需要被激活； 也可以 activeRule: '/app1' 或 activeRule: ['/app1', '/app2']
   * props 向子组件传递信息
   */
  {
    name: "reactMicroApp",
    entry: `//${isEnter}:10100`,
    container: "#wrapper",
    activeRule: genActiveRule("/menu/react"),
    props: {store, basePath: '/menu/react'},
  },
  {
    name: "vueMicroApp",
    entry: `//${isEnter}:10200`,
    container: "#wrapper-vue",
    activeRule: genActiveRule("/menu/vue"),
    props: {store, basePath: '/menu/vue'},
  },
  // {
  //   name: "angularMicroApp",
  //   entry: "//localhost:10300",
  //   container: "#frame",
  //   activeRule: "/angular"
  // },
  {
    name: "staticMicroApp",
    entry: `//${isEnter}:10400`,
    container: "#wrapper",
    activeRule: genActiveRule("/static")
  },
];

export default apps;
