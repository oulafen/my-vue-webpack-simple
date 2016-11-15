<template>
  <div class="main">
    <transition :name="routerTransition" mode="out-in" appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
	export default{
		data(){
			return {
				routerTransition: 'fade'
			}
		},
		watch: {
	    '$route' (to, from) {
	      const toDepth = to.path.split('/').length
	      const fromDepth = from.path.split('/').length

	      if(toDepth != fromDepth){
	      	this.routerTransition = toDepth < fromDepth ? 'slide-right' : 'slide-left'	      	
	      }else{
	      	this.routerTransition = 'fade'
	      }
      	console.log('routerTransition-->', this.routerTransition)
	    }
	  }
	}
</script>