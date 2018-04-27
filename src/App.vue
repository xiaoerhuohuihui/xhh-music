<template>
  <div id="app">
    <my-header></my-header>
    <!-- <my-header @click.native="showAlter"></my-header> -->
    <my-body></my-body>
    <transition name='play'>
      <Player v-if="$store.state.musicList[0]"></Player>
    </transition>
    
    <transition name='alter'>
      <Alter v-if="$store.state.alterError"></Alter>
    </transition>
  </div>
</template>

<script>
import MyHeader from "./components/layout/header";
import MyBody from "./components/layout/body";
import Player from "com/player/player";
import Alter from "com/tools/Alter";

export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    // showAlter() {
    //   this.$store.commit('changeAlterError', !this.$store.state.alterError)
    // }
  },

  components: {
    MyHeader,
    MyBody,
    Player,
    Alter
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
body {
  width: 100%;
  background: rgba(0, 0, 0, 0.788);
  color: rgba(240, 255, 255, 0.705);
}
#app {
  position: relative;
}
.alter-enter-active{
  transition: all .3s ease;
}
.alter-leave-active {
  transition: all .5s ease;
}
.alter-enter{
  transform: translateY(150%);
  opacity: 0;
}
.alter-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.play-enter-active{
  transition: all .3s ease;
}
.play-leave-active {
  transition: all .5s ease;
}
.play-enter{
  transform: translateY(150%);
  opacity: 0;
}
.play-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
