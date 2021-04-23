import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/vant'
import './assets/common.less'
import myTabBar from '../src/components/common/tabBar'
Vue.component('my-tab-bar',myTabBar)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
