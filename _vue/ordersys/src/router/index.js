import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import store from '../store/index'


const HomePage = () => import('../views/HomePage')

import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    component: HomePage
  },
  {
    path: '',
    redirect: 'login'
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token')
//   console.log(store.state.token)
//   if (token === null){
//     console.log('toke is null')
//     next({
//       path: '/login'
//     })
//
//   }
  // if (token === null && to.path !== '/login') {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   if (to.path === '/login') {
  //     if (token === store.state.token) {
  //       next({
  //         path: '/homepage'
  //       })
  //     } else {
  //       next()
  //     }
  //   } else {
  //     if (token !== store.state.token) {
  //       store.commit('clearToken')
  //       next({
  //         path: '/login',
  //
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // }
// })

export default router
