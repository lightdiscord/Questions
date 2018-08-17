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
    },
    {
      path: '/exercises/:id',
      name: 'exercises',
      component: () => import('./Exercise.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
