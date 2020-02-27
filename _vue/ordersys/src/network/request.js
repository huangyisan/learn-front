import axios from 'axios'

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

  return instance(config)
}