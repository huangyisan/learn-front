import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import store from '../store/index'


// const HomePage = () => import('../views/HomePage')
import HomePage from '../views/HomePage'
import Login from '../views/Login'

import {tokenCheck} from '../network/tokenCheck'



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

// 如果访问为login页面, 则判断token的合法性, 如果是则跳转到homepage, 反之,则将token remove
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (token === null && to.path !== '/login'){
    console.log('toke is null')
    next({
      path: '/login'
    })
  }else if(token !== 'null' && to.path === '/login'){
    tokenCheck(token).then( res =>{
      console.log(res)
      if (res.code === 200){
        next({
          path: '/homepage'
        })
      }else {
        sessionStorage.removeItem('token')
        next()
      }
    })
  }else(
      next()
  )
})


export default router
