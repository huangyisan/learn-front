const state = {
  tasks: [
    {
      id: 1,
      name: "go to shop",
      complate: false,
      dueDate: '2020/01/01',
      dueTime: '22:22:33'
    },
    {
      id: 2,
      name: "go to home",
      complate: false,
      dueDate: '2020/01/02',
      dueTime: '12:22:33'
    },
    {
      id: 3,
      name: "go to school",
      complate: true,
      dueDate: '2020/01/03',
      dueTime: '02:22:33'
    }
  ]
}

const mutations = {

}

const actions = {

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