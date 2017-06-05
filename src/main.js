import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Vue2Filters from 'vue2-filters'
import Routes from './routes'
import RAFPoly from './raf-poly'


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(Vue2Filters);

const router = new VueRouter({
    routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
