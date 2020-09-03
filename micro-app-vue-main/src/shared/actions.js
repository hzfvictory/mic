import {initGlobalState} from "qiankun";

// 事先要先声明
const initialState = {
  scen_id: ''
};
const actions = initGlobalState(initialState);

export default actions;