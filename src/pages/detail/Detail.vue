<template>
    <div>
      <detail-banner :sightName="sightName"
                     :bannerImg="bannerImg"
                     :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <div class='content'>
        <detail-list :list='list'></detail-list>
      </div>
    </div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
  import axios from 'axios'
  export default {
    name: 'Detail',
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    methods: {
      getDetailInfo () {
        let url = '/api/detail.json'
        axios.get(url, {
          params: {
            id: this.$route.params.id
          }
        }).then(this.getDetailInfoSucc)
      },
      getDetailInfoSucc (response) {
        response = response.data
        let data = response.data
        if (response.ret && data) {
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    mounted () {
      this.getDetailInfo()
    }
  }
</script>

<style scoped lang='stylus' type='text/stylus'>
  .content
    height 50rem
</style>
