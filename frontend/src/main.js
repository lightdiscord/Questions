import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { Router } from './views';

import * as ServiceWorker from './service-worker';

ServiceWorker.Register();

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount('#app');
