/*基于REUDX通信方案*/
const emptyRedux = () => {
  console.warn('当前执行的redux不存在!');
};

class Store {
  actions = {
    dispatch: emptyRedux,
    getState: emptyRedux,
    replaceReducer: emptyRedux,
    subscribe: emptyRedux,
  };

  setStore(actions) {
    this.actions = actions;
  }

  dispatch(...args) {
    return this.actions.dispatch(...args);
  }

  getState() {
    return (
      this.actions.getState() || {
        jumpUrl: () => {},
      }
    );
  }

  replaceReducer(...args) {
    return this.actions.replaceReducer(...args);
  }

  subscribe(...args) {
    return this.actions.subscribe(...args);
  }
}

const store = new Store();
export default store;
