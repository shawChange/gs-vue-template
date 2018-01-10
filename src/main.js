// The Vue build version to load with the `import` command
import App from './App.vue';
import store from './vuex/store';
import router from './router';
import ElementUI from 'gsum-uikit';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
