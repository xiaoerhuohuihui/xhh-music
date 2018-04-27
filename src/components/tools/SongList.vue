<template>
    <ul>
        <li class="li-title">
            <span>歌手名字</span>
            <span>歌曲名字</span>
        </li>
        <li v-for="(n,index) in songlist" :key="index" @click="getname(index)" :class="{active:index===getMusicIndex}">
            <span>{{n.data.singer[0].name}}</span>
            <span>{{n.data.songname}}</span>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  data() {
    return {};
  },
  props: {
      songlist:{
          type:Array
      }
  },
  methods: {
    getname(index) {
      this.$store.commit('changeMusicList', this.songlist)
      this.$store.commit('changeMusicIndex', index)
    },
  },
  computed: {
    ...mapGetters(['getMusicIndex',]
    ),
  },
};
</script>

<style scoped>
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
</style>