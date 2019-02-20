<template>
  <div class="top-bar" ref="topBar">
    <header>
      <router-link to="/">
        <img class="logo" alt="wb-icon" src="@/assets/wb.jpg" />
      </router-link>
      <div class="info-block">
        <Search />
        <router-link to="/write">
          <button>写文章</button>
        </router-link>
        <template v-if="Auth.logedIn">
          <router-link to="/message">
            <i class="icon-tixing" />
          </router-link>
          <Avatar src="https://user-gold-cdn.xitu.io/2019/2/4/168b759092773515?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
        </template>
        <template v-else>
          <router-link to="/login">登 录</router-link>
          <router-link to="/signup">注 册</router-link>
        </template>
      </div>
    </header>
    <nav>
      <ul ref="ul" @click="toggleCurrentClass">
        <li><a>推荐</a></li>
        <li v-for="item in types" :key="item"><a>{{ item }}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Auth from '@/plugins/auth';
import Avatar from '@/components/avatar';
import Search from './search.vue';

export default {
  name: 'topBar',
  data() {
    return {
      Auth,
      clear: 0,
      scrollTop: 0,
    };
  },
  props: {
    types: {
      type: Array,
      required: true,
    }
  },
  components: {
    Avatar,
    Search,
  },
  methods: {
    toggleCurrentClass({ target }) {
      if (target.tagName !== 'UL') {
        [...this.$refs.ul.children].forEach(li => {
          li.children[0].classList.remove('current');
        });
        (target.children[0] || target).classList.toggle('current');
      }
    },
    handleScroll(e) {
      clearTimeout(this.clear);
      this.clear = setTimeout(() => {
        if (document.documentElement.scrollTop > this.scrollTop) {
          this.$refs.topBar.classList.add('scroll-down');
          this.$refs.topBar.classList.remove('scroll-up');
        } else {
          this.$refs.topBar.classList.add('scroll-up');
          this.$refs.topBar.classList.remove('scroll-down');
        }
        this.scrollTop = document.documentElement.scrollTop;
      }, 150);
    },
  },
  mounted() {
    this.scrollTop = document.documentElement.scrollTop;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
.scroll-down
  transform translateY(-62px)
a, button
.current, .icon-search
  cursor pointer
i, li
  display inline-block
.top-bar, a:visited
  color #909090
nav 
  box-shadow 1px 4px 10px #f1f1f1 
ul
  padding 0
  list-style none
  li
    a
      padding 14px 20px
      display inline-block
a
  text-decoration none
.top-bar 
  transition transform .2s ease
  background-color #fff
  position fixed
  top 0
  left 0
  width 100%
a:hover
.current
  color #007fff
.logo
  height 50px
  padding 5.5px 0
  vertical-align middle
header
  border-bottom 1px solid #f1f1f1
  display flex
  flex-direction row
  justify-content space-between
header
nav > ul
  box-sizing border-box
  margin 0 auto
  max-width 960px
button
  border none 
  color white
  border-radius 3px
  font-size 1em
  width 74px
  height 32px
  background-color #007fff
.icon-tixing
  font-size 1.4em
  vertical-align middle
.search-block
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
    color hsla(0,0%,59.2%,.5)
    font-size 1.3em
    vertical-align middle
    transform translateX(-150%)
.info-block
  flex-basis 45%
  justify-content space-between
  display flex
  align-items center
</style>
