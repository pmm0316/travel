<template>
    <div class="icons">
      <swiper>
        <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
            </div>
            <p class="icon-desc">热门景点</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="icon">
            <div class="icon-img">
              <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
            </div>
            <p class="icon-desc">热门景点</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons'
  }
</script>

<style scoped lang="stylus" type="text/stylus">

  @import "~styles/variables.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    .icon
      position relative
      overflow hidden
      float left
      width 25%
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom .2rem
        height .44px
        line-height .44px
        text-align center
        color $darkTextColor
</style>
