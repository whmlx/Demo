import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./font/iconfont.css"

//完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
//单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue实例
Vue.use(MintUI)

//引入axios
import axios from "axios"
//添加二个参数 请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/";
//发送请求保存session信息
axios.defaults.withCredentials=true;
//axios注册Vue 不支持Vue.use方法
Vue.prototype.axios=axios


import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
