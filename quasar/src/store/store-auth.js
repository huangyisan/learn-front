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
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      // 隐藏loading效果
      Loading.hide()
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        // 登陆成功跳转到任务页面
        this.$router.push('/').catch(err => {})
        // 读取该用户的tasks信息。跨store读取，第一个参数为store名称/方法，第二个为参数，若没有参数则为null，第三个为{root: true}
        dispatch('tasks/fbReadData', null, {root: true})
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