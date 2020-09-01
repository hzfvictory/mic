import Vue from 'vue'
import Message from './src/index.vue'

let TempMessage = ''

// 模拟异步请求
setTimeout(() => {
  TempMessage = Message
}, 2000)

let messageInstance = null

let init = () => {
  let MessageConstructor = TempMessage && Vue.extend(TempMessage)

  messageInstance = new MessageConstructor({})// 构造函数可以接传值，data、methods.....
  // console.log(messageInstance);

  messageInstance.$mount()

  document.body.appendChild(messageInstance.$el)
  messageInstance.$el.style.zIndex = 9999
}


let caller = (options) => {
  if (!messageInstance) {
    // 进页面初始化
    init(options)
  }
  messageInstance.addMessage(options)
}


export default {
  install(vue) {
    vue.prototype.$mymessage = caller
  }
}
