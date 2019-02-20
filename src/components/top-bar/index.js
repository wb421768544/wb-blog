import TopBar from './src/main.vue';

TopBar.install = function(Vue) {
  Vue.component(TopBar.name, TopBar);
};

export default TopBar;