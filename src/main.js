// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '../lib/gsum-style/gsum-uikit-style.min.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI,{Message} from 'element-ui';
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCookie);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
