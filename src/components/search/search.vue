<template>
  <div class="search">
    <el-input placeholder="请输入内容" type='search' v-model="value" @keyup.enter.native="search">
    </el-input>
    <ul class="list">
      <li class="li-title">
        <span>歌手名字</span>
        <span>歌曲名字</span>
      </li>
      <li v-for="(item, index) in result "
       :key="index"
       @click="play(item)"
       >
        <span>{{item.songname}}</span>
        <span>{{item.singer[0].name}}</span>
      </li>
      
    </ul>
    <p class="next" v-if="result.length > 0"  @click="next">
        下一页
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
import { searchMusic } from "api/search";
export default {
  data() {
    return {
      value: "",
      result: [],
      p: 1,
      songlist:[]
    };
  },
  methods: {
    search() {
      searchMusic(this.value, this.p)
        .then(res => {
          console.log('我是result');
          
          console.log(this.result);
          
          this.result = res.data.data.song.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    play(item){
      this.songlist = []
      this.songlist.push(item)
      this.$store.commit('changeMusicList', this.songlist)
      this.$store.commit('changeMusicIndex', 0)
    },
    next(){
      this.p++
      searchMusic(this.value, this.p)
        .then(res => {
          this.result = res.data.data.song.list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
}
.list{
  margin-bottom: 50px;
}
li {
  display: flex;
}
.li-title{
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
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.5;
}
li:nth-child(even) {
  background-color: rgb(25, 25, 25);
}
li:nth-child(odd) {
  background-color: rgb(58, 56, 56);
}
.next{
  text-align: center;
  line-height: 1.5;
  margin-top: -50px;
}
</style>