<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界</div>
        <div class="banner-number">
          <span class="iconfont back-icon">&#xe604;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
          'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
      }
    },
    components: {
      CommonGallary
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      color #fff
      line-height .6rem
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        line-height .4rem
        height .4rem
        border-radius .2rem
        background rgba(0,0,0,0.8)
        font-size .24rem
        .banner-icon
          font-size .18rem
</style>
