import store from "@/shared/store"

export default {
  name: "",
  data() {
    return {
      ary: [...new Array(150).keys()],
      name: {a: 1},
      val: localStorage.getItem('input')
    }
  },
  methods: {
    queryData({detail: {handelData}}) {
      console.log(handelData({data: [1, 2, 3, 4], kkk: 121}));

    },
    dispatchData() {
      // document.dispatchEvent(window.evt);
      document.addEventListener('emit', this.queryData);
      document.dispatchEvent(window.cEvt);
    },
    dispatchRedux() {
      console.log(store.dispatch({
        type: 'SET_DETAIL',
        payload: {data: [1, 2, 3, 4], kkk: 121}
      }));
    },
    jumpUrl() {
      store.getState().jumpUrl('/menu/react/detail/1176407714125975552')
    },
    jumpList() {
      this.$router.push("/list")
    },
    inputHandler(msg, val) {
      this.val = val
      localStorage.setItem('input', val)
    }
  },
  created() {
  },
  mounted() {
    // 返回值是取消订阅
    const unSubscribe = store.subscribe(() => {
      // 注册订阅函数
      console.log(store.getState(), 'vue  -  订阅方法');
    })
    console.log(unSubscribe);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('emit', this.queryData);
      unSubscribe()
    })
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'table-list') {
      this.$store.commit('change', ['tableLists'])
    } else {
      this.$store.commit('change', []);
    }
    next()
  }
}