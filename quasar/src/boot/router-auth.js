import { LocalStorage } from 'quasar'

export default  ( { router } ) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    if (to.path !== '/auth' && !loggedIn) {
      next('/auth')
    }
    else {
      next()
    }
  })
}
