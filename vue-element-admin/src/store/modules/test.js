/*
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-19 10:55:16
 * @Description: 添加描述
 */
import { testAddress } from "@/api/test";

import router, { resetRouter } from "@/router";

const state = {};

const mutations = {};

const actions = {
  //获取详情地址
  testAddress({ commit }, { parentCode }) {
    return new Promise((resolve, reject) => {
      testAddress({ parentCode }).then(res => {
        resolve(res);
      });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
