<template>
	<div class="lazyload">
		<div class="imgs-box" v-for="img in imgs">
			<img src="img" alt="">
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	Vue.use(VueLazyload, {
	  preLoad: 1.3,
	  error: './statics/images/error.gif',
	  loading: './statics/images/loading.gif',
	  attempt: 1
	})
	export default{
		data(){
			return {
				imgs: [
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/39/28/71K58PICQ3n.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg',
					'http://pic.qiantucdn.com/58pic/11/12/27/89z58PICUBk.jpg'
				]
			}
		}
	}
</script>
<style>
	
</style>