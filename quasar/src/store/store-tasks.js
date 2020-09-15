import Vue from 'vue'
import { uid } from 'quasar'


const state = {
  tasks: 
  {
    uid0:
      {
        name: "go to shop",
        complate: false,
        dueDate: '2020/01/01',
        dueTime: '22:22:33'
      },
    uid1:
      {
        name: "go to home",
        complate: false,
        dueDate: '2020/02/01',
        dueTime: '23:22:33'
      },    
    uid2:
      {
        name: "go to park",
        complate: false,
        dueDate: '2020/03/01',
        dueTime: '13:22:33'
      },
  },
  search: '',
  sort: 'dueDate'
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
    // console.log(state)
    // console.log(id)
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    //也是得用Vue.set()来触发响应式添加
    // 三个参数, 第一个是state, 第二个是key, 第三个是value
    Vue.set(state.tasks, payload.id, payload.task)

  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
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
  },
  setSearch( { commit }, value) {
    commit('setSearch', value)
  },

  setSort( { commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  // 对tasks进行排序
  tasksSorted: (state) => {
    let tasksSorted = {}
    // 获取tasks的key
    let keysOrdered = Object.keys(state.tasks)
    // 对name进行排序
    // 如果要让a排在b前面，则返回负值，反之返回正值，如果不动，则返回0
    keysOrdered.sort((a,b) => {
      // 根据state.sort定义的内容来排序，这边原先是硬编码，写了.name，现在修改成[state.sort]，而不是.[state.sort],是因为js的字典实现其实是基于数组的
      let taskAprop = state.tasks[a][state.sort].toLowerCase()
      let taskBprop = state.tasks[b][state.sort].toLowerCase()

      if (taskAprop > taskBprop) return 1
      else if (taskAprop < taskBprop) return -1
      else return 0
    })
    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })
    return tasksSorted
  },
  // 根据search bar过滤tasks, 传入tasksSorted
  tasksFiltered: (state, getters) => {
    let tasksFiltered = {}
    let tasksSorted = getters.tasksSorted
    // 如果有内容，则执行过滤
    if (state.search) {
      Object.keys(tasksSorted).forEach( (key) => {
        let task = tasksSorted[key]
        
        //搜索不分大小写
        let taskNameLowerCase = task.name.toLowerCase()
        let searchNameLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchNameLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    // 默认情况返回tasksSorted
    return tasksSorted
  },

  // 传入getters变量，引入tasksFiltered
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks={}
    // 将tasksFiltered作为内容替换原本的state.tasks
    // Object.keys(state.tasks).forEach(function(key) {
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (!task.complate) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksComplated: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks={}
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key]
      if (task.complate) {
        tasks[key] = task
      }
    })
    return tasks
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}