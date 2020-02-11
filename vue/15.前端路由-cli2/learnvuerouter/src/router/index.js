// 这里面配置所有路由相关信息
import Vue from 'vue'
// 导入vue-router,这个是用来做前端路由的
import Router from 'vue-router'

// 既然要组件,则需要导入. 导入home和about
// 修改为懒加载后,下面的注释
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 使用懒加载的方式
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')

// 1. 通过Vue.use(Router), 安装router插件.
// 任何插件的安装都用Vue.use(插件)
Vue.use(Router)


// 在routes里面配置路径和资源的映射关系
// 是routes不是routers
const routes = [
// 一个url对应一个组件, 一个映射一个对象
//  path为路径, component为组件名称
  {
    // 重定向, 首页定向到/home
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    //编写子组件,子组件不需要加/
    children: [
      // 添加重定向,作为默认展示news
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    // 配置动态路由/:xx
    path: '/user/:userId',
    component: User
  }

]


// 将这个Router导出,给main.js使用
// 创建router对象,所以要new出来
export default new Router({
  routes,
  //默认是hash模式.可以通过mode来指定使用history模式, 这样就没有#了
  mode: 'history',
//  全局修改active-class的属性名
  linkActiveClass: 'active'

})
