<template>
  <div class="home">
    <div>
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in img" :key="item.url"> <img :src="item.url" alt=""></mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item> -->
    </mt-swipe>
    <!-- <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      img:[
      {url:'@/images/27.jpg'},
      {url:'@/images/25.jpg'},
      {url:'@/images/28.jpg'}
    ]
    }
    
  },
  mounted () {
    this.$http.getSwiper()
      .then(resp => {
        console.log(resp)
      })
  }
}
</script>
 
<style>
 .mint-swipe {
    height:200px;
    /* background-color: #f50; */
  }
</style>
