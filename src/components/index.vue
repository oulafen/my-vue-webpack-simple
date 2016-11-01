<template>
    <div id="index" class="index">
        <div class="weui-tab">
            <div class="weui-tab__panel">
                <transition name="fade" mode="out-in" appear>
                    <component :is="currentView"></component>
                </transition>
            </div>
            <div class="weui-tabbar">
                <a href="javascript:;"  v-for="(tab, index) in tabs" class="weui-tabbar__item"
                   :class="{'weui-bar__item_on': index===selected}"
                   @click="choose(index)">
                    <img src="../../statics/images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">{{tab.tabName}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import personal from './personal.vue'
    import home from './home.vue'
    import lists from './lists.vue'
    export default{
        data(){
            return{
                tabs:[
                    {tabName: '练习'},
                    {tabName: '首页'},
                    {tabName: '我的'}
                ],
                selected: 1,
                currentView:'view_1'
            }
        },
        components:{
            'view_0':lists,
            'view_1':home,
            'view_2':personal
        },
        methods:{
            choose(index) {
                this.selected = index;
                this.currentView='view_'+index;
            }
        },
        route:{
            data() {
                /*每次切换路由，在渲染出页面前都会执行*/
            }
        }
    }
</script>