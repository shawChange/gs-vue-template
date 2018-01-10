import HelloWorld from '@/modules/HelloWorld';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
