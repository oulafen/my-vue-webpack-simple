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
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
```

- 添加页面过渡css(vue2.0和1.0有些许差别, 详情看[文档](https://vuejs.org/guide/migration.html))
```css
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-active {
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
//定义组件
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
  components:{  //引入组件
    'my_footer': my_footer,
    'todo-item': {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    }
  }
}
</script>
```
- 添加`footer.vue`
```
<template>
    <div class="weui-footer">
        <p class="weui-footer__links">
            <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
            <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
        </p>
        <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
    </div>
</template>
```
## 使用简单的markdown编辑器
[示例地址](http://blog.oulafen.com/my-vue-webpack-simple/#/markdown)
- 引入官网marked文件
```javascript
import marked from '../../statics/js/marked@0.3.6.js'
```
- 使用marked方法来计算输入的内容
```html
<template>
    <div id="editor">
        <textarea :value="input" v-model="input"></textarea>
        <div class="weui-panel">
            <div class="weui-panel__hd">markdown预览</div>
            <div class="box"  v-html="compiledMarkdown"></div>
        </div>
    </div>
</template>
<script>
    import marked from '../../statics/js/marked@0.3.6.js'
    export default{
        name:'editor',
        data(){
            return {
                input: '# input markdown'
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, {
                    sanitize: true
                })
            }
        }
    }
</script>
<style>
# balabala 省略
</style>
```
- 给代码加高亮
引入highlight的js和css, 再在marked方法中配置下就OK了, 以下给出增加的代码片段, 插到相应位置上就可以了
```
<link rel="stylesheet" href="../../statics/css/solarized_light.min.css">
import hljs from '../../statics/js/highlight.min'

return marked(this.input, {
    sanitize: true,
    highlight: function(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
    }
})
```
- 更多的设置自行google
源码中默认的配置参数:
```javascript
marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};
```

## 问题总结
- build项目之后, 静态资源的如图片加载失败
    原因肯定是路径不对, 所以才找不到, 建议将`webpack.config.js`中的`publicPath`改为路径`dist/`, 若不行,再查看其它有关路径设置的地方
    


 