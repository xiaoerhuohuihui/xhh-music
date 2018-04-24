<template>
    <div>
        <h3 class="title">{{title}}</h3>
        <ul class="warp">
            <li class="list-li"
            v-for="(item, index) in list" 
            :key="index"
             @click="alterNews">
                <img class="list-li-img" :src="item.picUrl" alt="">
                <p class="list-li-p">{{item.Ftitle}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
      list:{
          tyep:Array
      },
      title:{
          type:String
      }
        
  },
  methods: {
      alterNews(){
          alert('找不到接口，换其他排行或者搜索听吧~')
      }
  }
}
</script>

<style scoped>
.title{
    padding: 5px;
    margin: 5px;
}
.warp{
    display: flex;
    flex-wrap: wrap;
    /* padding: 1%; */
}
.list-li{
    width: 48%;
    margin: 0 1% 5%;
    /* border: #fff 5px solid; */
    padding: 5px; 
    box-sizing: border-box;
    background-color: rgba(87, 85, 85, 0.466);
}
.list-li-img{
    width: 100%;
    /* height: 100%; */
}
.list-li-p{
    padding: 2px;
    color: rgb(174, 194, 199);
    text-indent: 1rem;
}
</style>