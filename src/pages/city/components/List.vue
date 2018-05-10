<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <button class="button">北京</button>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
              <button class="button">北京</button>
            </div>
            <div class="button-wrapper">
              <button class="button">北京</button>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈哈哈哈</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈哈哈哈</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈哈哈哈</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
            <div class="item border-bottom">aaaaa</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:after
      border-color #ccc
  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          width 90%
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
          background #fff
    .item-list
      .item
        line-height .68rem
        padding-left .24rem
</style>
