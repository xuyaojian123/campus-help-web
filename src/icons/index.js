import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件



const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)

// register globally
Vue.component('svg-icon', SvgIcon)