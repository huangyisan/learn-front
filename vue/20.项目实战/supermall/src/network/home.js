// 对home的request再次封装, 全部写这里面
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })

}