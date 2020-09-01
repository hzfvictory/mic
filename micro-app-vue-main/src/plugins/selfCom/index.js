/*
* 自定义挂载组件
* */
import Vue from "vue";
import Message from '@/components/Message/index.js'
import Alert from '@/components/Alert/index.js'
import TableList from '@/components/TableList/index.js'
import About from "@/views/About"


Vue.use(Message)
Vue.use(Alert)
Vue.use(TableList)


let Ab = '';


setTimeout(() => {
  Ab = About
}, 4000)


Vue.component("counter", Ab && Ab);
