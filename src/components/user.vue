<template>
    <div class="user">
        <p>user id : {{ $route.params.id }}</p>
    </div>
</template>
<script>
	export default{
		data(){
			return {
	      post: null,
	      error: null
	    }
		},
		created(){
			 this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
	      $('.loading').show()
	      // replace getPost with your data fetching util / API wrapper
	      setTimeout(function(){
	      	$('.loading').hide()
	      },500)
	      console.log(' in user.vue fetchData')
	      // getPost(this.$route.params.id, (err, post) => {
	      //   this.loading = false
	      //   if (err) {
	      //     this.error = err.toString()
	      //   } else {
	      //     this.post = post
	      //   }
	      // })
	    }
		}
	}
</script>