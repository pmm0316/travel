<template>
    <div>
      <router-link tag="div" to="/"
                   class="header-abs"
                   v-show="showAbs">
        <div class="iconfont header-abs-back">&#xe624;</div>
      </router-link>
      <div class="header-fixed"
           v-show="!showAbs" :style="opacityStyle">
        景点详情
        <div class="iconfont header-back">&#xe624;</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        console.log('scroll')
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop > 53) {
          let opacity = scrollTop / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = { opacity }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated () {
      // 监听scroll事件
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () { // deactivated中，离开页面时执行
      // 移除scroll事件
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    text-align center
    line-height .8rem
    border-radius .4rem
    background rgba(0,0,0,0.8)
    .header-abs-back
      color #fff
      font-size 0.4rem
  .header-fixed
    position fixed
    z-index 2
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      text-align center
      color #fff
</style>
