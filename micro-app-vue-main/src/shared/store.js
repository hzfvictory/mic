import {createStore} from "redux";
import router from '@/router'

const initialState = {
  jumpUrl: (url) => {
    router.history.push(url)
  },
  detail: {}
};

// 多个reducer用combineReducers合并
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case "SET_DETAIL":
      return {
        ...state,
        detail: action.payload
      };
  }
};

const store = createStore(reducer);

export default store;