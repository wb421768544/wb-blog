<template>
  <a class="article-block" :href="'/article/' + article_id">
    <h3> {{ title }} </h3>
    <span class="type" :class="'color-' + types.indexOf(type)">{{ type }}</span>
    <a class="author">{{ name }}</a>
    <time>{{ new Date(parseInt(timer)).toLocaleString() }}</time>
  </a>
</template>

<script>
export default {
  name: 'articleCard',
  data() {
    return {};
  },
  props: {
    types: {
      type: Array,
      default: () => ([]),
      required: true,
    },
    title: String,
    type: String,
    name: String,
    timer: String,
    article_id: String,
  },
};
</script>

<style lang="stylus" scoped>
.article-block
  font-size .5em
  padding 2em 3em
  display block
  color #909090
  text-decoration none
  border 1px solid red
  background-color #fff
  border 1px solid #f4f5f6
  &:hover
    background-color #fcfcfc
h3
  color #000
  cursor pointer
  font-size 2em
  font-weight 700
  margin 5px 0 15px
.type
  width 5em
  color #fff
  padding 3px
  font-size 1em
  border-radius 3px
  text-align center
  white-space nowrap
  display inline-block
.author
  display inline-block
  width 10em
  text-align center
  margin-left 1em
.color-0
  background-color #42c67d
.color-1
  background-color #56c4e1
.color-2
  background-color #e8596b
.color-3
  background-color #857dea
.color-4
  background-color #ff955b
</style>
