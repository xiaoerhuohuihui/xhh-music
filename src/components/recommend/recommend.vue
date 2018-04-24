<template>
    <div>
      <Slider :sliderList='sliderList'></Slider>
      <RecommendList :list='radioList' :title="'电台'"></RecommendList>
      <RecommendSongList :list='songList' :title="'热门歌单'"></RecommendSongList>
    </div>
    
</template>

<script type="text/ecmascript-6">
import { getRecommend } from 'api/recommend'
import Slider from 'com/tools/Slider'
import RecommendList from 'com/recommend/recommendList'
import RecommendSongList from 'com/recommend/recommendSongList'

export default {
  data() {
    return {
      sliderList:[],
      radioList:[],
      songList:[]
    }
  },
  mounted () {
    this._getRecommend()
  },
  methods: {
    _getRecommend(){
      this.$axios.get('/api/'+getRecommend()).then(res=>{
         this.sliderList = res.data.data.slider
         this.radioList = res.data.data.radioList
         this.songList = res.data.data.songList
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  components: {
    Slider,
    RecommendList,
    RecommendSongList,
  }
}
</script>

<style scoped>
</style>