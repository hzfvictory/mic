import {routes} from "../../router/index"

const router = {
  state: {
    list: routes,
    includes: ['tableLists', 'tableDetail', "a", "b"]
  },
  mutations: {
    add(state, payload) {
      state.count++
    },
    change(state, payload) {
      state.includes = payload
    },
  },
  actions: {
    changeList(context, payload) {
      // console.log(payload);

      context.commit('change', payload)
    },
  },
  getters: { // 跟在外面单独声明是一样的
    getRouter(state) {
      return state.list
    }
  }
};

export default router
