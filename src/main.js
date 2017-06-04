import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);

const router = new VueRouter({
    routes: Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
