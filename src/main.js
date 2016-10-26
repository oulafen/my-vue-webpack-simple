import Vue from 'vue'
import VueRouter from 'vue-router'

//components lists
import App from './App.vue';
import Home from './components/home.vue';
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const app = Vue.extend(App);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes
});

new app({
  router
}).$mount('#app');
