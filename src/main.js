import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import {Lazyload} from 'vant'

import 'normalize.css/normalize.css'//Normalize.css 是一个可以定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一

import 'amfe-flexible/index.js' //amfe-flexible用于设置 rem 基准值
import 'vant/lib/index.css' // 引入全部样式
import './icons' // icon

// 注册一些常用的组件到全局
import '@/components/common'


Vue.config.productionTip = false

Vue.use(vant)

Vue.use(Lazyload,{
  lazyComponent: true,//是否能懒加载模块
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
