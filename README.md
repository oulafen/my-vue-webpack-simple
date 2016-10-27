# my-vue-webpack-simple

> A Vue.js 2.0 project 
## init project
```bash
npm install vue-cli -g  #install vue-cli
vue init webpack-sample my-vue-webpack-simple  # 创建基于模板webpack-sample的vue项目
```

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

# Next(开刀阔斧balabala的事儿)
## 使用vue-router
- 安装 `npm install vue-router --save`
- 配置router

`./src/main.js`文件:
```javascript
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

- 设置路由模板`./src/App.vue`文件:
```html
<template>
  <div class="main">
    <router-view
            keep-alive
            transition="fade"
            transition-mode='out-in'></router-view>
  </div>
</template>
```

- 添加页面过渡css
```css
.fade-transition {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
```

## 添加组件
 - 改写`home.vue`
```vue
<template>
    <div id="home">
     <h1>{{ msg }}</h1>
     <ol>
       <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
     </ol>
     <my_footer></my_footer>
    </div>
</template>
<script>
import my_footer from './footer.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  components:{
    'my_footer': my_footer,
    'todo-item': {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    }
  },
  route:{
    data() {
      /*每次切换路由，在渲染出页面前都会执行*/
    }
  }
}
</script>
```
 