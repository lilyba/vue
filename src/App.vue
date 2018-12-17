<template>
  <div class="app">
    <div class="app-header">
      <b-header></b-header>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
    <div class="app-tabbar">
      <router-view name="tabbar"></router-view>
    </div>
  </div>
</template>

<script>
import BHeader from './components/BHeader'
export default {
  name: 'App',
  components: {
    BHeader
  }
}
</script>

<style lang="scss">
// css reset
html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, address, img, i, dl, dt, dd, ol, ul, li, form, label, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, footer, header,menu, nav, section, summary, time, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article, aside, details, footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
.app{
  height:100%;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  &-main {
    flex: 1;
    overflow-x: hidden;
  }
  
  &-header {
    height:45px;
  }

}
</style>
