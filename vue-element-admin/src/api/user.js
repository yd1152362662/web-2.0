/*
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-23 12:49:03
 * @Description: 添加描述
 */
import request from '@/utils/request'

import request1 from '@/utils/request1'

export function login(data) {
  console.log('data', data)
  return request1.NetPost('/login', data, 'userLogin')
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
