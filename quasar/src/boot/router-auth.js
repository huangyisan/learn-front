import { LocalStorage } from 'quasar'

export default  ( { router } ) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    console.log(loggedIn)
    if (to.path !== '/auth' && !loggedIn) {
      next('/auth')
    }
    else {
      next()
    }
  })
}
