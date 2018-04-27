<template>
    <ul class="list-view">
      <li v-for="(item, index) in toplist" :key="index" @click="listid(item)">
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
      getTopList()
        .then(res => {
          this.toplist = res.data.data.topList;
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
.list-view{
  margin-bottom: 50px;
}
li {
  display: flex;
  margin-top: 1rem;
  background-color: rgba(80, 72, 74, 0.712);
  color: rgb(174, 194, 199)
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