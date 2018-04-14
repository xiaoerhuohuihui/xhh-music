<template>
    <div class="list">
        <div class="imgdiv">
            <span @click='goback' class="goback"> &lt; </span>
            <img :src="imgsrc" alt="">
        </div>
        <div class="music-list">
            <!-- <div id="audio">
                <audio ref="myaudio" :src="qqsongurl" controls='controls' autoplay></audio>
            </div> -->

            <!-- <button class="play-btn" @click="play">{{playname}}</button> -->
            <ul>
                <li class="li-title">
                    <span>歌手名字</span>
                    <span>歌曲名字</span>
                </li>
                <li v-for="(n,index) in songlist" :key="index" @click="getname(n.data, index)" :class="{active:index===activeindex}">
                    <span>{{n.data.singer[0].name}}</span>
                    <span>{{n.data.songname}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getMusicList } from "api/toplist";
export default {
  data() {
    return {
      songdata: {},
      songlist: [],
      songmid: "",
      isplay: false,
      playname: "播放",
      activeindex: -1,
      imgsrc:''
    };
  },
  created() {
    this.getmusiclist();
  },
  computed: {},
  methods: {
    getmusiclist() {
      let topUrl = getMusicList(this.$route.params.listId);
      //   console.log(this.$route.params.listId);
      this.$axios
        .get("/api/" + topUrl)
        .then(res => {
        //   console.log(res.data);
          this.imgsrc = res.data.topinfo.pic_h5
          this.songdata = res.data;
          this.songlist = res.data.songlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getname(data, index) {
      // console.log(event.currentTarget)
      // event.currentTarget
    //   this.songmid = data;
      this.$store.commit('changeurl', data)
      this.activeindex = index;
    },
    goback() {
      this.$emit("listgo");
      this.$router.go(-1);
    }
  },
  computed: {
  }
};
</script>

<style scoped>
.imgdiv {
    /* height: 300px; */
}
img {
    width: 100%;
}
.list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(48, 45, 45, 1);
  z-index: 100;
}
.goback {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
* {
  padding: 0;
  margin: 0;
}
#sing {
  border: aquamarine 1px solid;
}
#audio {
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
}
li {
  display: flex;
}
li:first-child {
  font-style: italic;
  font-size: 1.2rem;
  border: 1px solid rgba(25, 25, 25, 1);
}
span {
  height: 100%;
  flex: 1;
  display: block;
  box-sizing: border-box;
  line-height: 1;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  padding: 5px;
}
li + li span {
  /* border: sandybrown solid 1px; */
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.5;
}
li:nth-child(even) {
  background-color: rgba(25, 25, 25, 1);
}
li:nth-child(odd) {
  background-color: rgb(58, 56, 56);
}
.active {
  background-color: rgba(12, 144, 153, 0.719) !important
}
.play-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  color: aqua;
}
</style>