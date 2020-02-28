import {request} from './request'

export function homePage() {
  return request({
    url: '/homepage',
    method: 'GET',
    timeout: 2000,
  })
}