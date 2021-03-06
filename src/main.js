import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import * as filters from '@/filters'
import bus from '@/utils/bus'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, {
  // locale
})

Vue.prototype.$bus = bus
Vue.config.productionTip = false
// 全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
