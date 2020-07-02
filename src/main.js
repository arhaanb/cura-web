import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/skeleton.css';
import '@/assets/bg.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
