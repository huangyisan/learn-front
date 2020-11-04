import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'


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
    // uid1:
    //   {
    //     name: "go to home",
    //     complate: false,
    //     dueDate: '2020/02/01',
    //     dueTime: '23:22:33'
    //   },    
    // uid2:
    //   {
    //     name: "go to park",
    //     complate: false,
    //     dueDate: '2020/03/01',
    //     dueTime: '13:22:33'
    //   },

  },
  search: '',
  sort: 'dueDate'
}

const mutations = {
  updateTask(state, payload) {
    // 用Object.assign方法
    Object.assign(state.tasks[payload.id], payload.update)
    console.log(state)
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
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload)
  },

  deleteTask({ dispatch }, id){
    dispatch('fbDeleteTask', id)
  },

  // dispatch fbAddTask方法直接更新firebase数据
  addTask({ dispatch }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    dispatch('fbAddTask', payload)
  },
  setSearch( { commit }, value) {
    commit('setSearch', value)
  },

  setSort( { commit }, value) {
    commit('setSort', value)
  },

  // reading data from firebase
  fbReadData( { commit } ) {
    // get current user id
    let userId = firebaseAuth.currentUser.uid
    let userTasks = firebaseDb.ref('tasks/' + userId)
    // 监听child节点添加事件。1.当连接数据库的时候会被触发，2. 当有child被添加的时候也会触发。
    userTasks.on('child_added', snapshot => {
      // 获取child节点的value
      let task = snapshot.val()
      
      //拼装payload用于mutation提交
      let payload = {
        id: snapshot.key,
        task: task,

      }

      // 将payload作用在名称为addTask的mutation上
      commit('addTask', payload)
    })

    // child change
    userTasks.on('child_changed', snapshot => {
      // 获取child节点的value
      console.log('child changed')
      let task = snapshot.val()
      
      //拼装payload用于mutation提交
      let payload = {
        id: snapshot.key,
        update: task,
      }
      // 将payload作用在名称为updateTask的mutation上
      commit('updateTask', payload)
    })
    
    // child remove
    userTasks.on('child_removed', snapshot => {
      let taskId = snapshot.key
      // 传入taskId进行删除
      commit('deleteTask', taskId)
    })
  },

  fbAddTask( {}, payload ) {
    // console.log(payload)
    let userId = firebaseAuth.currentUser.uid
    // 获取到payload.id层级，然后对该层级设置对应的task内容。
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
    taskRef.set(payload.task)
  },

  fbUpdateTask( {}, payload ) {
    // console.log(payload)
    let userId = firebaseAuth.currentUser.uid
    // 获取到payload.id层级，然后对该层级设置对应的task内容。
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
    taskRef.update(payload.update)
  },

  fbDeleteTask( {}, taskId ) {
    console.log(taskId)
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId)
    taskRef.remove()
  },

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