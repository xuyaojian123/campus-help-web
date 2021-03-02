import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//VUE 解决当前路由重复点击跳转报错。。。。
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 一级页面
const Login = ()=>import("../views/login/Login.vue")
const Home = ()=>import("../views/home/Home.vue")
const Category = ()=>import("../views/category/index.vue")
const Help = ()=>import("../views/help/index.vue")
const User = ()=>import('../views/user/userCenter/index.vue')

// 二级页面
const Search = ()=>import("../views/search/index.vue")
const Cart = ()=>import("../views/cart/index.vue")
const Address = ()=>import("../views/user/address/list.vue")

const routes = [
  {
    path:"/login",
    name:'login',
    component: Login
  },
  {
    path:'',
    redirect:'/home'
  },
  {
    path:"/home",
    name:"home",
    component: Home,
    meta:{
      showTab:true
    }
  },
  {
    path:'/category',
    name:"category",
    component:Category,
    meta:{
      showTab:true
    }
  },
  {
    path:"/search",
    name:"search",
    component:Search
  },
  {
    path:'/help',
    name:'help',
    component:Help,
    meta:{
      showTab:true
    }
  },
  {
    path:'/user',
    name:'name',
    component:User,
    meta:{
      showTab:true
    },
  },
  {
    path:"/cart",
    name:"cart",
    component: Cart
  },

  // 二级页面
  // 我的地址
  {
    path:'/address',
    name:'address',
    component:Address
  },
  // 编辑地址
  {
    path:'/address/edit',
    name:'addressEdit',
    component:() =>import('../views/user/address/edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
