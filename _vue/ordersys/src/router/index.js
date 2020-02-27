import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


const HomePage = () => import('../views/HomePage')

import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path:'/homepage',
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

export default router
