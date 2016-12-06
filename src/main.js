import Vue from 'vue'
import VueRouter from 'vue-router'

//base css
require("../statics/css/style.scss")

//base js
import zepto from '../statics/js/lib/zepto.js'
import zeptoTouch from '../statics/js/lib/zepto.touch.js'
import base from '../statics/js/base.js'

//components lists
import App from './App.vue';

const app = Vue.extend(App);

Vue.use(VueRouter);
const routes = [
  { path: '/', component: view('index') },
  { path: '/home', component: view('home') },
  { path: '/lists', component: view('lists') },
  { path: '/personal', component: view('personal') },
  { path: '/detail', component: view('detail') },
  { path: '/lists/user/:id', component: view('user'), name: 'user' },
  { path: '/lists/form', component: view('form') },
  { path: '/lists/markdown', component: view('markdown') },
  { path: '/lists/editor_mobile_demo', component: view('editor-mobile-demo') },
  { path: '/lists/lazyload', component: view('lazyload') },
  { path: '*', component: view('default') }
];

//rebase url `./components/`
function view(name) {
    return function(resolve) {
        require(['./components/' + name + '.vue'], resolve);
    }
};

const router = new VueRouter({
  routes
});

new app({
  router
}).$mount('#app');
