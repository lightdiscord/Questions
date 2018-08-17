import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const Router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./About.vue')
    }
  ]
});
