<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont back-icon">&#xe604;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs"
                      v-show="showGallary"
                      @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/Fade'
  export default {
    name: 'DetailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data () {
      return {
        showGallary: false
      }
    },
    components: {
      CommonGallary,
      FadeAnimation
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
