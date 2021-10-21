import Vue from 'vue';
import VueRouter from 'vue-router';

// const TestTable = () => import(/* webpackChunkName: "test-table" */ '../views/test.vue')
const TableList = () => import(/* webpackChunkName: "table-list" */ '../views/table-list.vue');
const SortTable = () => import(/* webpackChunkName: "table-sort" */ '../views/sort-table.vue');
const Temp = () => import(/* webpackChunkName: "temp" */ '../views/temp.vue');
const Home = () => import(/* webpackChunkName: "home" */ '../views/home.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Menu = () => import(/* webpackChunkName: "menu" */ '../views/menu.vue');

import TestTable from '../views/test.vue';
// import TableList from "../views/table-list.vue"
// import SortTable from "../views/sort-table.vue"
// import Temp from "../views/temp.vue"
// import Home from "../views/home.vue"
// import About from "../views/About.vue"
// import Menu from "../views/menu.vue"

Vue.use(VueRouter);

export const routes = [
  {path: '/', redirect: '/wel'},
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/wel',
    name: 'About',
    component: About,
    meta: {keepAlive: true},
  },
  {
    path: '/menu',
    name: '右键菜单',
    component: Menu,
  },
  {
    path: '/test',
    name: 'test',
    component: TestTable,
  },
  {
    path: '/table-list',
    name: 'table-list',
    component: TableList,
    meta: {keepAlive: true},
    props: () => ({
      id: 1008611,
    }),
  },
  {
    path: '/table-detail',
    name: 'table-detail',
    component: () => import('../views/table-detail.vue'),
  },
  {
    path: '/sort-table',
    name: 'sort-table',
    component: SortTable,
    props: () => ({
      id: 1008611,
    }),
  },
  {
    path: '/temp',
    name: 'temp',
    component: Temp,
  },
  {
    path: '/mic/*',
    name: 'mic',
    component: {
      render: (c) => c('router-view'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
