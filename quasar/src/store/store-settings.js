import { LocalStorage } from 'quasar'

const state = {
  settings: {
    show12HourTimeFormat: true
  }
}

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  }
}

const actions = {
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('setShow12HourTimeFormat', value)
    // 同时异步调用saveSettings函数
    dispatch('saveSettings')
  },

  // 将state内容存入用户浏览器localStorage中
  saveSettings({ state }){
    LocalStorage.set('settings', state.settings)
    // localStorage.set('settings', state.settings)
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