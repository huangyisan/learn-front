import { LocalStorage } from 'quasar'
import { firebaseAuth } from 'boot/firebase'

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
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      console.log('error: ', error.message)
    })
  },
  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      console.log('error: ', error.message)
    })
  },
  logoutUser(){
    firebaseAuth.signOut()
    // this.$router.replace('/auth')
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
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