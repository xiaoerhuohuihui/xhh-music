<template>
    <div class="list">
        <div class="imgdiv">
            <span @click='goback' class="goback el-icon-arrow-left
"> </span>
            <img :src="imgsrc" alt="">
        </div>
        <div class="music-list">
            <ul>
                <li class="li-title">
                    <span>歌手名字</span>
                    <span>歌曲名字</span>
                </li>
                <li v-for="(n,index) in songlist" :key="index" 
                @click="getname(index)" 
                :class="{active:index===getMusicIndex}">
                    <span>{{n.data.singer[0].name}}</span>
                    <span>{{n.data.songname}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getMusicList } from "api/toplist"
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      songlist: [],
      songmid: "",
      isplay: false,
      playname: "播放",
      // activeindex: -1,
      imgsrc:''
    };
  },
  created() {
    this.getmusiclist();
  },
  computed: {
    ...mapGetters(['getMusicIndex',]
    ),
  },
  methods: {
    getmusiclist() {
      let topUrl = getMusicList(this.$route.params.listId);
      this.$axios
        .get("/api/" + topUrl)
        .then(res => {
          this.imgsrc = res.data.topinfo.pic_h5
          this.songlist = res.data.songlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getname(index) {
      this.$store.commit('changeMusicList', this.songlist)
      this.$store.commit('changeMusicIndex', index)
    },
    goback() {
      this.$emit("listgo");
      this.$router.go(-1);
    }
  },
  
};
</script>

<style scoped>
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
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(12, 12, 12)
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
  color: rgb(174, 194, 199)
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