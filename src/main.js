// The Vue build version to load with the `import` command
import App from './App.vue';
import store from './vuex/store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
