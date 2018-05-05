<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'

  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons
    }
  }
</script>

<style scoped>

</style>
