<template>
  <div class="home">
    <TopBar :types="types" />
    <div class="articles">
      <ArticleCard
        v-for="article in articles"
        :key="article.article_id"
        v-bind="article"
        :types="types"
      />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/top-bar';
import ArticleCard from '@/components/article-card';
import { fetchArticleListByTourist } from '@/apis';

export default {
  name: 'home',
  data() {
    return {
      types: [],
      articles: [],
      cur: 0,
    };
  },
  components: {
    TopBar,
    ArticleCard,
  },
  mounted() {
    fetchArticleListByTourist({
      start: this.cur,
    }).then(({ data }) => {
      console.log(data)
      this.types = data.types;
      this.articles = data.articles;
      this.cur += this.articles.length;
    }).catch(err => {

    });
  },
}
</script>

<style lang="stylus">
.home
  height 2000px
.articles
  width 80%
  margin 9em auto
body
  background-color #f4f5f5
</style>

