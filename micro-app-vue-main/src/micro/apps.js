import store from "@/shared/store";

const isProduction = process.env.NODE_ENV === 'production';

const isEnter = isProduction ? '120.79.229.197' : 'localhost';

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}


const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 浏览器url发生变化会调用这个函数，activeRule 返回 true 时表明该子应用需要被激活。
   * props 向子组件传递信息
   */
  {
    name: "ReactMicroApp",
    entry: `//${isEnter}:10100`,
    container: "#wrapper",
    activeRule: genActiveRule("/menu/react"),
    props: {store},
  },
  {
    name: "VueMicroApp",
    entry: `//${isEnter}:10200`,
    container: "#wrapper-vue",
    activeRule: genActiveRule("/menu/vue"),
    props: {store},
  },
  // {
  //   name: "AngularMicroApp",
  //   entry: "//localhost:10300",
  //   container: "#frame",
  //   activeRule: "/angular"
  // },
  {
    name: "StaticMicroApp",
    entry: `//${isEnter}:10400`,
    container: "#wrapper",
    activeRule: genActiveRule("/static")
  },
];

export default apps;
