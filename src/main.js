// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import ElementUI from 'gsum-uikit'

Vue.config.productionTip = false
Vue.use(ElementUI)
let vueConfig = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Vue.use({
  vueConfig
})
