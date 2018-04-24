// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import mint from 'mint-ui'
import ElementUi from 'element-ui'
import axios from 'axios'
import jsonp from 'jsonp'
import router from './router/index'
import store from './store/index'
import swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'
// import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = axios
Vue.prototype.$jsonp = jsonp
Vue.prototype.$swiper = swiper


// Vue.use(mint)
Vue.use(ElementUi)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
