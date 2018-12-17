<template>
  <div class="b-tabbar">
    <router-link 
      v-for="route in navData" 
      :key="route.name"
      :to="route.path"
      tag="div"
      class="b-tabbar-item">
      <div class="icon">
        <i class="iconfont" v-html="route.icon"></i>
      </div>
      <div class="title">{{route.title}}</div>
    </router-link>
  </div>
</template>

<script>
import routes from '@/router/routes'

export default {
  name: 'tabbar',
  data () {
    return {
      navData:routes.filter(route => route.isTabbar ==true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 966876 */
    src: url('http://at.alicdn.com/t/font_966876_7mqgrgq9v85.eot');
    src: url('http://at.alicdn.com/t/font_966876_7mqgrgq9v85.eot?#iefix') format('embedded-opentype'),
    url('http://at.alicdn.com/t/font_966876_7mqgrgq9v85.woff') format('woff'),
    url('http://at.alicdn.com/t/font_966876_7mqgrgq9v85.ttf') format('truetype'),
    url('http://at.alicdn.com/t/font_966876_7mqgrgq9v85.svg#iconfont') format('svg');
  }
  .b-tabbar {
    height: 52px;
    background-color: #D81B60;
    display: flex;

    &-item {
      flex: 1;
      text-align: center;
      color: #F48FB1;

      &.router-link-active {
        color: #fff;
      }

      > .icon {
        height:32px;
        line-height:32px;

        > .iconfont {
          font-family: 'iconfont';
          font-size: 24px;
        }
      }
      > .title {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }

</style>
