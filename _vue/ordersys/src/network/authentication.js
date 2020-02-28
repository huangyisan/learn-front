import {request} from './request'

export function authentication(username, password) {
  return request({
    url: '/authentication',
    method: 'POST',
    data: {
      username: username,
      password: password
    }
  })
}