import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

import { getalbumimgurl } from "api/toplist";

Vue.use(Vuex)

const state = {
  music: {},
}
const getters = {
  getsongurl(state) {
    if (state.music.songmid === "") {
      return "";
    }
    let url =
      "http://ws.stream.qqmusic.qq.com/C100" +
      state.music.songmid +
      ".m4a?fromtag=0";
    return url;
  },
  getsongname(state){
    if (state.music.songname === "") {
      return "";
    }
    return state.music.songname;
  },
  getablummidurl(state){
    let ablummid = ''
    if (state.music.albummid === "") {
      return  ""
    }else{
       ablummid = state.music.albummid
    }
    //console.log(getalbumimgurl(ablummid))
    return getalbumimgurl(ablummid)

  }
}

const mutations = {
  changeurl(state, payload) {
    state.music = payload
  }
}
const acitons = {
  
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  acitons
})
