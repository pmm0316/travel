<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
  .header
    position relative
    overflow hidden
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
