<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    data () {
      return {
        cities: {},
        hotCities: []
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (response) {
        response = response.data
        let data = response.data
        if (data && response.ret) {
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      }
    },
    mounted() {
      this.getCityInfo()
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>

</style>
