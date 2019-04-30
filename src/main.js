import Vue from 'vue'
import App from './App.vue'

//导入饿了吗UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 引入头部尾部的全局样式
import baseCSS from './assets/statics/site/css/style.css'

//导入首页组件
import index from './components/index.vue'


//导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//写路由规则

const routes= [
  //首页规则
  {path:'/index',component:index}
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
