import {request} from './request'

export function homePage() {
  return request({
    url: '/homeinfo',
    method: 'GET',
    timeout: 2000,
  })
}