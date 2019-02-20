import ArticleCard from './src/main.vue';

ArticleCard.install = function(Vue) {
  Vue.component(ArticleCard.name, ArticleCard);
};

export default ArticleCard;