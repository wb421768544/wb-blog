<template>
  <div class="search-block">
    <input
      type="text"
      placeholder="搜索文章/作者"
      @focus="addFocusClassName"
      @blur="removeFocusClassName"
    />
    <i class="icon-search" />
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    addFocusClassName({ target }) {
      target.parentNode.classList.add('focus');
    },
    removeFocusClassName({ target }) {
      target.parentNode.classList.remove('focus');
    },
  }
};
</script>

<style lang="stylus" scoped>
.search-block
  white-space nowrap
  input
    width 166px
    height 30px
    outline none
    font-size 1em
    border-radius 3px
    padding-left .8em
    color hsla(0,0%,59.2%,1)
    border 1px solid hsla(0,0%,59.2%,.2)
  input::-webkit-input-placeholder
    color hsla(0,0%,59.2%,.8)
    font-size .9em
  i
    display inline-block
    color hsla(0,0%,59.2%,.5)
    font-size 1.3em
    vertical-align middle
    transform translateX(-150%)
.focus
  input 
    border 1px solid #007fff
  i
    color #007fff
.icon-search
  cursor pointer
</style>
