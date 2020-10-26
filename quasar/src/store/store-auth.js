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
    // 为什么不把这条代码写在logoutUser函数中，是因为写在这边当setLoggedIn为false的时候还是能够进入主页面的
    // this.$router.replace('/auth')
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        // 登陆成功跳转到任务页面
        this.$router.push('/')
      }else{
        commit('setLoggedIn', false)
        // 只要setLoggedIn为false都被跳转到auth界面
        this.$router.replace('/auth')
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