import Vue from 'vue'
import { uid } from 'quasar'


const state = {
  tasks: 
  {
    // uid0:
    //   {
    //     name: "go to shop",
    //     complate: false,
    //     dueDate: '2020/01/01',
    //     dueTime: '22:22:33'
    //   },
  }
}

const mutations = {
  updateTask(state, payload) {
    // 用Object.assign方法
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // delete删除后,没有更新dom, 该操作和向响应式对象添加属性, 使用数组的索引设置值, 直接修改数组长度三种情况, 都不会触发响应式更新.
    // delete state.tasks[id]
    // 使用Vue.delete方法来响应式更新.
    console.log(state)
    console.log(id)
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    //也是得用Vue.set()来触发响应式添加
    // 三个参数, 第一个是state, 第二个是key, 第三个是value
    Vue.set(state.tasks, payload.id, payload.task)

  }

}

const actions = {
  // 虽然updateTask操作是同步的,但建议先走action,让action调用mutations
  // 光actions还是无法改变state信息,需要使用commit方式地阿偶用mutations
  updateTask({ commit }, payload) {
    // 第一个参数为mutations的方法名称
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id){
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasksTodo: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}