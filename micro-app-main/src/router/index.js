import withLoadable from "../utils/withLoadable"

const Layout = withLoadable(() => import('@/layout'));
const Layout1 = withLoadable(() => import('@/layout/menu2'))

// const Login = withLoadable(() => import('@/pages/login'))
const Home = withLoadable(() => import('@/pages/home'))
// const Message = withLoadable(() => import('@/pages/message'))

// export default {
//   routes: [
//     {
//       path: '/login',
//       exact: true,
//       component: Login,
//       title: '登录页'
//     },
//     {
//       path: '/home',
//       exact: true,
//       component: Home,
//       title: '首页'
//     },
//     {
//       path: '/menu',
//       component: Layout,
//       routes: [
//         {
//           path: '/menu/home',
//           exact: true,
//           component: Home,
//           title: '一级菜单首页',
//           meta: {icon: 'home', keepAlive: true}
//         },
//         {
//           path: '/menu/message',
//           exact: true,
//           component: Message,
//           title: '一级菜单消息页',
//         },
//       ]
//     },
//     {
//       path: '/menu2',
//       component: Layout1,
//       routes: [
//         {
//           path: '/menu2/home',
//           exact: true,
//           component: Home,
//           title: '二级菜单首页',
//         },
//         {
//           path: '/menu2/message',
//           exact: true,
//           component: Message,
//           title: '二级菜单消息页',
//         },
//       ]
//     }
//   ]
// }


export default {
  routes: [
    {
      path: '/menu',
      component: Layout,
      routes: [
        {
          path: '/menu/list',
          component: Home,
          exact: true,
          title: '一级菜单首页',
          meta: {icon: 'home', keepAlive: true}
        },
      ]
    },
    {
      path: '/menu2',
      component: Layout1,
    }
  ]
}