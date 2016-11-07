<template>
  <div id="home">
    <div id="loadingToast" style="opacity: 1;" v-if="loading">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">数据加载中</p>
      </div>
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <img src="../../statics/images/logo.png">
    <h2>{{ msg }}</h2>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <ol>
      <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
    </ol>
    <button class="weui-btn weui-btn_primary">显示Indicator</button>
  </div>
</template>

<script>
//  import Indicator from 'vue-indicator'

export default {
  name: 'home',
  data () {
    return {
      loading: false,
      post:null,
      error: null,
      msg: 'Welcome to My Vue.js App',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
  components:{
    'todo-item': {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
//    'showIndicator': function(){
//      console.log('in indicator')
//      Indicator.open({ text:'Loading...', spinnerType: 'fading-circle' });
//    },
    'fetchData': function () {
      this.error = this.post = null;
//      this.loading = true;
      // replace getPost with your data fetching util / API wrapper
      setTimeout(function(){
        this.post = 'newDate';
        this.loading = false;
      },2000);
//      $.ajax({
//        type: 'POST',
//        url: '/home/index',
//        data: {id: this.$route.params.id},
//        dataType: 'json',
//        success: function (post) {
//          this.post = post;
//          this.loading = false;
//        },
//        error: function(err){
//          this.error = err.toString();
//          this.loading = false;
//        }
//      })
    }
  }
}
</script>

<style scoped>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px 0;
}
img{
  width: 160px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
