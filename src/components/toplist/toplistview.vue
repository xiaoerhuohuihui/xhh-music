<template>
    <ul>
      <li v-for="(item, index) in toplist" :key="index" @click="listid(item)">
        <!-- <h3>{{item.topTitle}}</h3> -->
        <div><img :src="item.picUrl" :alt="item.topTitle"></div>
        <div>
          <h3>{{item.topTitle}}</h3>
          <p v-for="(song, index) in item.songList" :key="index">
            {{index+1}} {{song.singername}}--{{song.songname}}
          </p>
        </div>
      </li>
    </ul>
</template>

<script type="text/ecmascript-6">
import { getTopList } from "api/toplist";
export default {
  data() {
    return {
        toplist: []
    }
  },
  created() {
    this.gettoplist();
  },
  methods: {
    gettoplist() {
      var urlString = getTopList();
      this.$axios
        .get('/api/'+urlString)
        .then(res => {
          var data = res.data.replace(/MusicJsonCallback/, "");
          data = data.slice(1, -1);
          data = JSON.parse(data);
            // console.log(data.data.toplist)
          this.toplist = data.data.topList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    listid(item){
        this.$emit('toplistid',item)
    }
  }
}
</script>

<style scoped>

li {
  display: flex;
  margin-top: 1rem;
  background-color: rgba(80, 72, 74, 0.712);
  
}
li div:first-child {
  width: 100px;
  height: 100px;
}
li div:last-child {
  padding-left: 30px;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p,h3{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
img {
  width: 100px;
  height: 100px;
}
</style>