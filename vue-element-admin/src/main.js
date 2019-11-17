/*
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-11-12 09:42:24
 * @Description: 添加描述
 */
import Vue from 'vue';

import Cookies from 'js-cookie';

import 'normalize.css/normalize.css'; // a modern alternative to CSS resets

import Element from 'element-ui';
import './styles/element-variables.scss';

import '@/styles/index.scss'; // global css

import 'element-ui/lib/theme-chalk/display.css'; // 栅格化隐藏显示

import App from './App';
import store from './store';
import router from './router';

import './icons'; // icon
import './permission'; // permission control
import './utils/error-log'; // error log
// import _ from 'lodash';

// 全局loading
import Loading from './components/loading/loading.js';
Vue.use(Loading);

import * as filters from './filters'; // global filters

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德key
  key: '9091d50c4c3fb27ab7030f21c9cb60f3',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geocoder', 'AMap.Geolocation', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer']
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import {
  mockXHR
} from '../mock';
if (process.env.NODE_ENV === 'production') {
  mockXHR();
}



Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
});

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

// 注册一个全局守卫，作用是在路由跳转前，对路由进行判断，防止未登录的用户跳转到其他需要登录的页面去
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('mark');
  if (token) {
    if (to.meta.disabled === true) {
      next({
        path: '/404'
      });
    } else {
      next();
    }
  } else {
    // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
    if (to.path !== '/login') {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
