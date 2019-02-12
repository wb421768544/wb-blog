<template>
  <div class="home">
    <TopBar />
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'home',
  components: {
    TopBar,
  },
}
</script>

<style lang="stylus" scoped>
.home
  height 2000px
</style>

