/*
 * @Author: yangdan
 * @Date: 2019-09-19 18:20:19
 * @LastEditors: yangdan
 * @LastEditTime: 2019-10-29 10:44:25
 * @Description: 添加描述
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import 'element-ui/lib/theme-chalk/display.css'; //栅格化隐藏显示

import App from './App'
import store from './store'
import router from './router'

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import MountFun from './utils/mountFun';

import _ from "lodash";

import * as filters from './filters' // global filters

import VueAMap  from 'vue-amap';
Vue.use(VueAMap );



/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

  // 初始化vue-amap
  VueAMap.initAMapApiLoader({
    // 高德key
    key: '9091d50c4c3fb27ab7030f21c9cb60f3',
    // 插件集合 （插件按需引入）
    plugin: ['AMap.Geocoder','AMap.Geolocation','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.MarkerClusterer']
  });


// // 全局挂载和后端的请求方法和配置属性
// for (let key in MountFun) {
//   console.log('key', key)
//   Vue.prototype['$' + key] = MountFun[key]
// }


Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
