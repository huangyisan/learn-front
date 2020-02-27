import {request} from './request'

export function loginIn(username, password) {
  return request({
    url: 'login',
    method: 'POST',
    data: {
      username: username,
      password: password
    }
  })
}