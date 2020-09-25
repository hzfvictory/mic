import Vue from 'vue'
import VueRouter from 'vue-router'

const TableList = () => import(/* webpackChunkName: "group-foo" */ '../views/table-list.vue')
const SortTable = () => import(/* webpackChunkName: "group-foo" */ '../views/sort-table.vue')

Vue.use(VueRouter);

export const routes = [

  {
    path: '/list',
    name: 'table-list',
    component: TableList,
    meta: {keepAlive: true},
  },
  {
    path: '/table-detail/:route?/:id?',
    name: 'table-detail',
    component: () => import('../views/table-detail.vue'),
  },
  {
    path: '/table-sort-list',
    name: 'table-sort-list',
    component: SortTable
  }
];

export default routes

