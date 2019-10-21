/*
 * @Author: yangdan
 * @Date: 2019-10-19 10:47:49
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-19 11:31:59
 * @Description: 添加描述
 */
import request from '@/utils/requestTest';

export function testAddress(data) {
  console.log('data', data);
  return request({
    url: '/api/area/queryChildren',
    method: 'post',
    // baseURL: 'https://appletpromotion.fantudl.com',
    data
  });
}
