<template>
    <div class="list">
        <div class="imgdiv">
            <span @click='goback' class="goback el-icon-arrow-left
"> </span>
            <img :src="imgsrc" alt="">
        </div>
        <div class="music-list">
            <!-- <ul>
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
            </ul> -->
            <Songlist :songlist='songlist'></Songlist>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { getMusicList } from "api/toplist"
import { mapGetters } from 'vuex'
import Songlist from 'com/tools/Songlist'
export default {
  data() {
    return {
      songlist: [],
      imgsrc:''
    };
  },
  components: {
    Songlist,
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
      getMusicList(this.$route.params.listId)
        .then(res => {
          this.imgsrc = res.data.topinfo.pic_h5
          this.songlist = res.data.songlist;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // getname(index) {
    //   this.$store.commit('changeMusicList', this.songlist)
    //   this.$store.commit('changeMusicIndex', index)
    // },
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

.play-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  color: aqua;
}
</style>