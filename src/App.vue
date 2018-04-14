<template>
  <div id="app">
    <!-- <hello></hello> -->
    <my-header></my-header>
    <my-body></my-body>
    <div class="player" v-if="$store.state.music.songmid">
      <div class="ablumidurl"><img :src="getablummidurl" alt=""></div>
      <div class="songname">{{getsongname}}</div>
      <span  @click="play">{{isplaying}}</span>
      <audio ref="myplayer" :src="getsongurl" autoplay></audio>   
      <!-- controls='controls' -->
    </div>
  </div>
</template>

<script>
import MyHeader from './components/layout/header'
import MyBody from './components/layout/body'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      isplay:true,
      playname:'播放',
    }
  },
  computed: {
    ...mapGetters({
      getsongurl:'getsongurl',
      getsongname:'getsongname',
      getablummidurl:'getablummidurl',
    }),
    isplaying(){
      if(this.isplay){
       return '暂停'
      }else{
        return '播放'
      }
    }
  },
  // created () {
  //   this.play()
  // },
  methods: {
    play(){
      let a = this.$refs.myplayer
      // console.log(a.played)
      if (!this.isplay) {
        a.play()
        this.isplay = true
        // this.playname='暂停'
      }else{
        a.pause()
        this.isplay = false
        // this.playname='播放'
      }
    },
    // watch: {
    //   getsongurl:function (val) {
    //     this.isplay = true
    //   }
    // }
  },
  components: {
    MyHeader,
    MyBody,
  }

}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
  }
  body{
    width: 100%;
    background: rgba(33, 33, 33, 1);
    color: rgba(240, 255, 255, 0.705);
  }
  
  .player{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 50px;
    background-color: rgb(221, 242, 250);
    z-index: 9999;
    color: black;
  }
  .ablumidurl{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .songname{
    padding-left: 20px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 50px;
  }
  .ablumidurl img{
    width: 100%;
  }
  .player span{
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    background-color: rgba(114, 206, 230, 0.712);
  }
</style>
