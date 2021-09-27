import { initGlobalState } from 'qiankun';
import router from '@/router';

// 事先要先声明
const initialState = {
  scen_id: '',
  msg: '',
  jumpUrl: (url) => {
    router.history.push(url);
  },
};
const actions = initGlobalState(initialState);

export default actions;
