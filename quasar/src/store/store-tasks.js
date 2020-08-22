const state = {
  tasks: [
    {
      id: 0,
      name: "go to shop",
      complate: false,
      dueDate: '2020/01/01',
      dueTime: '22:22:33'
    },
    {
      id: 1,
      name: "go to home",
      complate: false,
      dueDate: '2020/01/02',
      dueTime: '12:22:33'
    },
    {
      id: 2,
      name: "go to school",
      complate: true,
      dueDate: '2020/01/03',
      dueTime: '02:22:33'
    }
  ]
}

const mutations = {
  updateTask(state, payload) {
    // 修改state中的complate
    console.log('this is updateTask payload \n', payload.update.complate)
    state.tasks[payload.id].complate = payload.update.complate
    // 或者用Object.assign方法
    // Object.assign(state.tasks[payload.id], payload.update)
  }

}

const actions = {
  // 光actions还是无法改变state信息,需要使用commit方式地阿偶用mutations
  updateTask({ commit }, payload) {
    // 第一个参数为mutations的方法名称
    commit('updateTask', payload)
  }
}

const getters = {
  tasks: (state) => {
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