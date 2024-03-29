import store from '@/shared/store';
import actions from '@/shared/actions';
import { loadMicroApp } from 'qiankun';

export default {
  name: '',
  data() {
    return {
      microApp: '',
      ary: [...new Array(150).keys()],
      name: { a: 1 },
      val: localStorage.getItem('input'),
    };
  },
  created() {},
  mounted() {
    // 加载子应用
    // this.setMicApp();

    actions.onGlobalStateChange((state) => {
      this.jumpUrl = state.jumpUrl;
      console.log(33333, '微应用观察者');
    }, true);

    // 返回值是取消订阅
    const unSubscribe = store.subscribe(() => {
      // 注册订阅函数
      console.log(store.getState(), 'vue  -  订阅方法');
    });
    // console.log(unSubscribe);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('emit', this.queryData);
      unSubscribe();

      this.microApp && this.microApp.unmount();
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'table-list') {
      this.$store.commit('change', ['tableLists']);
    } else {
      this.$store.commit('change', []);
    }
    next();
  },
  methods: {
    queryData({ detail: { handelData } }) {
      console.log(handelData({ data: [1, 2, 3, 4], kkk: 121 }));
    },
    dispatchData() {
      // document.dispatchEvent(window.evt);
      document.addEventListener('emit', this.queryData);
      document.dispatchEvent(window.cEvt);
    },
    dispatchRedux() {
      console.log(
        store.dispatch({
          type: 'SET_DETAIL',
          payload: { data: [1, 2, 3, 4], kkk: 121 },
        })
      );
    },
    setMicApp() {
      /*TODO: 手动加载微应用    新建一个全新的，不然冲突*/
      this.microApp = loadMicroApp({
        name: 'vueMicroApp',
        entry: '//localhost:10200',
        container: '#reactLoadMicroApp',
        props: { dddd: '子应用', store, basePath: '/menu/react' },
      });
    },
    jumpUrl() {
      store.getState().jumpUrl('/menu/react/detail/1176407714125975552');
    },
    jumpList() {
      this.$router.push('/list');
    },
    inputHandler(msg, val) {
      this.val = val;
      localStorage.setItem('input', val);
    },
  },
};
