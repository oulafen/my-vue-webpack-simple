<template>
	<div class="default">
		<p>访问的页面不存在</p>
	</div>
</template>
<script>
	export default{
		created: function(){
			$('.loading').hide();
		}
	}
</script>
<style scope>
	p{
		text-align: center;
		margin: 20px 0;
	}
</style>