import Vue from 'vue'
import App from './App.vue'

//1.导入饿了吗UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 2.引入头部尾部的全局样式
import baseCSS from './assets/statics/site/css/style.css'

//3.导入首页组件
import index from './components/index.vue'

//4.导入详情组件
import detail from './components/detail.vue'

//5.导入路由
import VueRouter from 'vue-router'

// 6.导入会员中组件
import usercomment from './components/usercomment.vue'

import userIndex from './components/userIndex.vue'

import userOrder from './components/userOrder.vue'

import userDetail from './components/userDetail.vue'


// 7.抽取axios
import axios from 'axios';

// 因为每一个组件都可以看做是Vue实例,所以把axios放在原型里面这样每一个Vue实例都可以访问,$是为了语法规范,原型添加的属性加个$
Vue.prototype.$axios=axios

//8.抽取基地址
axios.defaults.baseURL = 'http://111.230.232.110:8899';

// 9.抽取全局过滤器
import moment from 'moment'
Vue.filter('formatTime',(value)=>{
  return moment(value).format("YYYY年MM月DD日")
})

Vue.use(VueRouter)

//写路由规则

const routes= [
  // 重定向(就是默认index页)
  { path: '/', redirect: '/index' },
  
  //首页规则
  {path:'/index',component:index},

  // 详情规则在
  // 因为详情需要携带id所以使用'动态路由'
  {path:'/detail/:id',component:detail},

  //会员中心的路由规则,注意:嵌套的路由路径里面不用是否'/' ; 嵌套路由的 link to的路径要写完成的路径
  {path:'/usercomment',component:usercomment,
  children:[
    { path: '/', redirect: 'userIndex' },
    {path:'userIndex',component:userIndex},// /usercomment/userIndex
    {path:'userOrder',component:userOrder},
    {path:'userDetail',component:userDetail},
  ]
},

]

//创建路由对象
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载
  router
}).$mount('#app')
