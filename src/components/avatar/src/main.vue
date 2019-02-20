<template>
  <div class="avatar">
    <img :src="src" alt="avatar" />
  </div>
</template>

<script>
export default {
  name: 'avatar',
  data() {
    return {

    };
  },
  props: {
    src: {
      type: String,
    },
  },
}
</script>

<style lang="stylus" scoped>
.avatar
  display inline-block
  img 
    width 30px
    cursor pointer
    border-radius 15px
    vertical-align middle
</style>
