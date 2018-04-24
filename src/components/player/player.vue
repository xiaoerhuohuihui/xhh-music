<template>
    <div class="player" >
      <div class="ablumidurl"><img :src="getablummidurl" alt=""></div>
      <div class="songinfo">{{getsongname}}--{{getsingerame}}</div>
      <span  @click="play">{{isplaying}}</span>
      <audio ref="myplayer" 
        :src="getsongurl"
        @timeupdate='changeProgress' 
        @error="errorit"
        autoplay>
        <!-- :src="getsongurl"  -->
      </audio>
      <div class="progress-father" ref="profather" @click="clickProgress">
        <div class="progress" :style="prowidth"></div>
      </div>   
    </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
        isplay:true,
        playname:'播放',
        prowidth:{
            width:'0%'
        }
    }
  },
  computed: {
    ...mapGetters({
      getsongurl:'getsongurl',
      getsongname:'getsongname',
      getablummidurl:'getablummidurl',
      getMusicList:'getMusicList',
      getMusicIndex:'getMusicIndex',
      getsingerame:'getsingerame',
    }),
    isplaying(){
      if(this.isplay){
       return '暂停'
      }else{
        return '播放'
      }
    },
  },
  
  methods: {
    play(){
      let a = this.$refs.myplayer
      if (!this.isplay) {
        a.play()
        this.isplay = true
      }else{
        a.pause()
        this.isplay = false
      }
    },
    // musicLoad(){
    //   let a = this.$refs.myplayer
    //   console.log('musicLoad');
    //   console.log(a.preload);
      
    // },
    changeProgress(){
        let a = this.$refs.myplayer
        if ('duration' in a && !isNaN(a.duration)) {
            let progress = a.currentTime / a.duration * 100 
            this.prowidth.width = progress+'%'
            // if(progress >= 100){
                
            // }
        }
        if(a.ended){
          if (this.getMusicList.length > 0 && this.getMusicIndex < this.getMusicList.length-1 ) {
            this.$store.commit('changeMusicIndex', this.getMusicIndex + 1)
          }
        }
    },
    clickProgress(){
      let a = this.$refs.myplayer
      let clickX = event.clientX
      let pfwidth = this.$refs.profather.offsetWidth
      if(!isNaN(a.duration)){
        a.currentTime = clickX/pfwidth * a.duration
      }
      
    },
    errorit(){
      // console.log('歌曲暂时不能播放，为您切换到下一曲')
      this.$store.commit('changeAlterError', !this.$store.state.alterError)
      setTimeout(() => {
        // console.log(this.getMusicList);
        this.$store.commit('changeAlterError', !this.$store.state.alterError)
        if (this.getMusicList.length > 0 && this.getMusicIndex < this.getMusicList.length-1 ){
          this.$store.commit('changeMusicIndex', this.getMusicIndex + 1)
        }
        
      }, 2000);
    },
   },
   watch: {
       getsongurl:function(val,oldval){
         
         let a = this.$refs.myplayer
         this.isplay = true
       },
   },
}
</script>

<style scoped>
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
  .songinfo{
    padding-left: 20px;
    height: 50px;
    padding-top: 10px;
    margin-right: 60px;
    position: absolute;
    top: 0;
    left: 50px;
  }
  .ablumidurl img{
    width: 100%;
  }
  .player span{
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    padding:0 10px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    background-color: rgba(114, 206, 230, 0.712);
  }
  .progress-father{
    position: absolute;
      top: -2px;
      left: 0;
      border: 2px solid rgb(5, 212, 248);
      width: 100%
  }
  .progress{
      position: absolute;
      top: -2px;
      left: 0;
      border: 2px solid rgb(3, 79, 99);
      /* width: 100%; */
  }
</style>