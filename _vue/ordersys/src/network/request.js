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
  instance.interceptors.request.use(config => {
    const token = config.headers.Authorization.split(' ')[1]
    if (token === 'null' && config.url !== '/authentication') {
      console.log('跳转到login')
      sessionStorage.removeItem('token')
      router.push('/login')

      return config
    }
    // 有. 则直接return config
    return config
  })

  instance.interceptors.response.use(res => {
    const reCode = res.data.responseCode
    console.log(res)
    if (reCode === 401){
      console.log('登陆失败或失效')
      router.push('/login')
      return res.data
    }
    return res.data
  })

  return instance(config)
}