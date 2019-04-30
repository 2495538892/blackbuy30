import Vue from 'vue'
import App from './App.vue'

// 引入头部尾部的全局样式
import baseCSS from './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
