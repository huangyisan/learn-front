import { LocalStorage } from 'quasar'

const state = {
  settings: {
    show12HourTimeFormat: true,
    showTasksInOneList: true
  }
}

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings)
  }
}

const actions = {
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('setShow12HourTimeFormat', value)
    dispatch('saveSettings')
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit('setShowTasksInOneList', value)
    // 同时异步调用saveSettings函数
    dispatch('saveSettings')
  },

  // 将state内容存入用户浏览器localStorage中
  saveSettings({ state }){
    LocalStorage.set('settings', state.settings)
    // localStorage.set('settings', state.settings)
  },
  // 从localstorage中获取settings, 并修改state.settings
  getSettings( {commit} ){
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }
}

const getters = {
  settings: state =>{
    return state.settings
  }
 
}

 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}