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
    props: {
      swiperList: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    width 100%
    overflow hidden
    height 31.25%
    .swiper-img
      width 100%
</style>
