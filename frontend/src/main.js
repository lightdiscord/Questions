import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { Router } from './views';
import * as firebase from './firebase';

// import * as ServiceWorker from './service-worker';

import 'milligram/dist/milligram.min.css';

// ServiceWorker.Register();

Vue.config.productionTip = false;

new Vue({
  router: Router,
  store,
  render: h => h(App)
}).$mount('#app');

firebase.handleAuthStateChanged(store);
