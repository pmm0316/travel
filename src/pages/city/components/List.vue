<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <button class="button">{{this.$store.state.city}}</button>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"  v-for="item in hot" :key="item.id">
              <button class="button" @click="handleCityClick(item.name)">{{item.name}}</button>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
            <div class="item border-bottom"
                 @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hot: Array,
      letter: String
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
      letter () {
        if (this.letter) {
          let ele = this.$refs[this.letter][0]
          this.scroll.scrollToElement(ele)
        }
      }
    },
    methods: {
      handleCityClick (city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
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
