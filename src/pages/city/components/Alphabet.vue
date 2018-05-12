<template>
  <div>
    <ul class="list" v-for="(item, key) in cities" :key="key">
      <li class="item">{{key}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  @import "~styles/variables.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
