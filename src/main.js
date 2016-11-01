import Vue from 'vue'
import VueRouter from 'vue-router'

//components lists
import App from './App.vue';
import Index from './components/index.vue';

import home from './components/home.vue';
import personal from './components/personal.vue';
import news from './components/news.vue';
import detail from './components/detail.vue';
import user from './components/user.vue';
import form from './components/form.vue';
import markdown from './components/markdown.vue';


const app = Vue.extend(App);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: Index },
  { path: '/home', component: home },
  { path: '/news', component: news },
  { path: '/personal', component: personal },
  { path: '/detail', component: detail },
  { path: '/user/:id', component: user , name: 'user'},
  { path: '/form', component: form },
  { path: '/markdown', component: markdown }
];

const router = new VueRouter({
  routes
});

new app({
  router
}).$mount('#app');
