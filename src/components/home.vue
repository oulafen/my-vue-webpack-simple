<template>
  <div id="home">

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
    $('.loading').hide();
  },
  methods: {
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
