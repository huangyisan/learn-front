import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false,

}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }

}

const actions = {
  registerUser({}, payload) {
    // 显示loading界面
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
  },
  logoutUser(){
    firebaseAuth.signOut()
    // this.$router.replace('/auth')
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      // 隐藏loading效果
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        // 登陆成功跳转到任务页面
        this.$router.push('/').catch(err => {})
      }else{
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => {})
      }
    })
  }
  
}

const getters = {
 
}

 
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}