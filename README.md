# my-vue-webpack-simple

> A Vue.js 2.0 project 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

# NEXT(接下来balabala的事儿)
## 使用vue-router
- 安装 `npm install vue-router --save`
- 配置router
`./src/main.js`文件:
```
import Vue from 'vue'
import VueRouter from 'vue-router'

//components lists
import App from './App.vue';
import Home from './components/home.vue';
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

//创建子类构造器
const app = Vue.extend(App);

//使用模块化机制编程， 要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

//定义路由
const routes = [
  { path: '/', component: Home },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes
});

// 挂载到根实例
new app({
  router
}).$mount('#app');
```

`./src/App.vue`文件:
```
<template>
  <div class="main">
    <router-view
            keep-alive
            transition="fade"
            transition-mode='out-in'></router-view>
  </div>
</template>
```