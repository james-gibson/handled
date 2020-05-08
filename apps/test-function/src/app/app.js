import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router';
import { createStore } from './client/store';

import App from './App.vue';

export function createApp() {
  const router = createRouter();
  const store = createStore();

  router.beforeEach((to, from, next) => {
    if (to.path.includes('/handled')) {
      next(to)
    }
    const nextRoute = `/handled${to.path}`
    console.log(nextRoute)
    next(nextRoute)
  })
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}
