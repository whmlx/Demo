import Vue from 'vue'
import Router from 'vue-router'


import Home from "./components/Home.vue"
import Me from './components/common/me'
import Login from './components/common/login'
import My_order from './components/common/my_order'
import Order_details from './components/common/order_details'
import NewDetails from './components/common/NewDetails'
import News from './components/common/News'
import xiangqing from './components/common/xiangqing'
import xiangmu from './components/common/xiangmu'
import jies from './components/common/jies'
import Back from './components/common/Back'
import search from './components/product/search'
import Product from './components/common/Product'

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/Back',component:Back},
    {path:'/me',component:Me},
    {path:'/login',component:Login},
    {path:'/my_order',component:My_order},
    {path:'/order_details',component:Order_details},
    {path:'/NewDetails',component:NewDetails},
    {path:'/News',component:News},
    {path:'/xiangqing',component:xiangqing},
    {path:'/xiangmu',component:xiangmu},
    {path:'/jies',component:jies},
    {path:'/search',component:search},
    {path:'/Product',component:Product}
  ]
})
