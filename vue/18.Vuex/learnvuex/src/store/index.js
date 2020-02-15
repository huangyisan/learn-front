import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建对象, 创建的是Vuex里面的Store属性
const store = new Vuex.Store({
  // 保存状态,比如登陆状态等
  state: {
    counter: 1000
  },
  // 同步操作执行
  mutations: {
  //  方法 通过mutations修改state
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }

  },
  //异步操作执行, 发送网络请求等情况
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 导出store对象

export default store
