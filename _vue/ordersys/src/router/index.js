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
  console.log(to.path)

  if (token === null && to.path !== '/login'){
    console.log('route A')
    next({
      path: '/login'
    })
  }else if(token !== 'null' && to.path === '/login'){
    tokenCheck(token).then( res =>{
      console.log('route B')
      if (res.code === 200){
        next({
          path: '/homepage'
        })
      }else {
        console.log('不是200 去111')
        sessionStorage.removeItem('token')
        next({
          path: '/111'
        })
      }
    })
  }else{
    console.log('route C')
    next()
  }

})


export default router
