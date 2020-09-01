import Home from "@/pages/home"
import List from "@/pages/list"
import Login from "@/pages/login"

export default {
  routes: [

    {
      path: '/',
      component: Home,
      exact: true,
      title: '首页',
    },
    {
      path: '/list',
      component: List,
      exact: true,
      title: '列表页',
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      title: '登录页',
    },
  ]
}