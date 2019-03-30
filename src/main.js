import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// min-ui引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// vant的导入
import Vant from 'vant'
import 'vant/lib/index.css'
// swiper的引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(VueAwesomeSwiper /* { default global options } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
