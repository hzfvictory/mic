import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

const path = require('path');


Vue.use(Vuex);

// 通过node的 require.context，获取所有的的文件目录
const files = require.context('./modules', false, /\.js$/);

let modules = {};

files.keys().forEach(key => {
  let name = path.basename(key, '.js'); // 当前文件的名字，没有后缀
  modules[name] = files(key).default || files(key)
});

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules,
  getters, // 这里也可以写在modules里面
  strict: debug,
  plugins: [
    // 这个数组里面是函数
    (...state) => {
      console.log(state);
    }
  ]
});


export default store
