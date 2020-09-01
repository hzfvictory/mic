import Vue from 'vue'
import VueRouter from 'vue-router'

const TableList = () => import(/* webpackChunkName: "group-foo" */ '../views/table-list.vue')
const SortTable = () => import(/* webpackChunkName: "group-foo" */ '../views/sort-table.vue')
const Temp = () => import(/* webpackChunkName: "group-foo" */ '../views/temp.vue')

Vue.use(VueRouter);

export const routes = [
  {path: "/", redirect: "/wel"},
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/wel',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {keepAlive: true}
  },
  {
    path: '/menu',
    name: '右键菜单',
    component: () => import('../views/menu.vue')

  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),

  },
  {
    path: '/table-list',
    name: 'table-list',
    component: TableList,
    meta: {keepAlive: true},
    props: (route) => ({
      id: 1008611
    })
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
    props: (route) => ({
      id: 1008611
    })
  },
  {
    path: '/temp',
    name: 'temp',
    component: Temp,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes

});

export default router

