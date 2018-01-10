// The Vue build version to load with the `import` command
import App from './App.vue';
import router from './router';
import ElementUI from '../libs/gsum-uikit-vue/index';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
