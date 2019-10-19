/*
 * @Author: yangdan
 * @Date: 2019-10-19 10:47:49
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-19 11:31:59
 * @Description: 添加描述
 */
import request from '@/utils/request'
import { resolve } from 'q'

export const testAddress = ({parentCode})=>new Promise((resolve, reject) => {
  request({
    url: '/area/queryChildren',
    method: 'get',
    baseURL: 'https://appletpromotion.fantudl.com/api/',
    data:{parentCode}
  }).then(res=>{
    console.log('res-Adress-Api-Success', res)
    resolve(res)
  })
  .catch(err =>{
    reject(err)
  })
})
