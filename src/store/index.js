import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

import { getalbumimgurl } from "api/toplist";

Vue.use(Vuex)

const state = {
  music: {},
  musicList:[],
  musicIndex : -1,
  alterError:false
}
const getters = {
  getsongurl(state) {
    let songmid = ''
    if(state.musicList[0] != null){
      if ('songmid' in state.musicList[state.musicIndex]) {
        songmid = state.musicList[state.musicIndex].songmid
      }else{
        songmid = state.musicList[state.musicIndex].data.songmid;
      }
    }
    if (songmid === "" || songmid === undefined || songmid === null) {
        return "";
    }
    let url =
      "http://ws.stream.qqmusic.qq.com/C100" +
      songmid +
      ".m4a?fromtag=0";
    return url;
  },
  getsongname(state){
    if (state.musicList[0] == null) {
      return "";
    }
    let songname = ''
    if ('songname' in state.musicList[state.musicIndex]) {
      songname = state.musicList[state.musicIndex].singer[0].name
    }else{
      songname = state.musicList[state.musicIndex].data.songname;
    }
     return songname
  },
  getsingerame(state){
    if (state.musicList[0] == null) {
      return "";
    }
    let singername = ''
    if ('singer' in state.musicList[state.musicIndex]) {
      singername = state.musicList[state.musicIndex].singer[0].name
    }else{
      singername = state.musicList[state.musicIndex].data.singer[0].name;
    }
    
    return singername
  },
  getablummidurl(state){
    let ablummid = ''
    if (state.musicList[0] == null) {
      return  ""
    }else{
      if ('albummid' in state.musicList[state.musicIndex]) {
        ablummid = state.musicList[state.musicIndex].albummid
      }else{
        ablummid = state.musicList[state.musicIndex].data.albummid;
      }
    }
    //console.log(getalbumimgurl(ablummid))
    return getalbumimgurl(ablummid)
  },
  getMusicList(state){
    return state.musicList
  },
  getMusicIndex(state){
    return state.musicIndex
  },
}

const mutations = {
  changeurl(state, payload) {
    state.music = payload
  },
  changeMusicList(state, payload){
    state.musicList = payload
  },
  changeMusicIndex(state, payload) {
    state.musicIndex = payload
  },
  changeAlterError(state, payload) {
    state.alterError = payload
  },
}
const acitons = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  acitons
})
