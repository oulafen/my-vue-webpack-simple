<template>
  <div class="main">
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default{
	mounted() {
        $('.loading').hide();
    }
}
</script>