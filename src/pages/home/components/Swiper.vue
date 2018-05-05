<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          el: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {id: '0001', imgUrl: 'http://img1.vbooking.net/prd/201804/20/20180420095654886.jpg'},
          {id: '0002', imgUrl: 'http://img1.vbooking.net/prd/201804/18/20180418151500278.jpg'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .wrapper
    width 100%
    overflow hidden
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>
