/*
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-23 17:13:06
 * @Description: 添加描述
 */
import { testAddress } from '@/api/test';
import { asyncRoutes, constantRoutes } from '@/router'

const state = {
    routes: [],
    addRoutes: []
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
};

const actions = {
  testAddress({ commit }, { parentCode }) {
    console.log('parentCode', parentCode);
    return new Promise((resolve, reject) => {
      testAddress({ parentCode }).then(res => {
        resolve(res);
      });
    });
  },
  generateRoutestest({ commit }) {
      let accessedRoutes = asyncRoutes
      commit('SET_ROUTES', accessedRoutes)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
