import axios from 'axios'

import router from '../router'


export function request(config) {
  const token = sessionStorage.getItem('token')
  const instance = axios.create({
    // baseURL: 'http://mall.kirakirazone.com',
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type':'application/x-www-form-urlencoded'
    }
  })

  // 请求发出前 拦截检查是否有token, 没有则直接跳到/login
  // instance.interceptors.request.use(config => {
  //   console.log(config.headers.Authorization.split(' ')[1])
  //   if (config.headers.Authorization.split(' ')[1] === null && config.url !== '/login') {
  //     console.log('跳转到login')
  //     router.push('/login')
  //     return config
  //   }
  //   // 有. 则直接return config
  //   return config
  // })

  return instance(config)
}