<template>
    <div id="m-body">
        <ul>
            <router-link to='/recommend' tag='li'><span>推荐</span></router-link>
            <router-link to='/singer' tag='li'><span>歌手</span></router-link>
            <router-link to='/toplist' tag='li'><span>排行</span></router-link>
        </ul>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
}
</script>

<style scoped>
ul{
    display: flex;
}
li{
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    color: white;
    background: grey;
}
li span{
    display: inline-block;
    padding: 5px;
    
}
.router-link-active{
    color: coral;
}
.router-link-active span{
    border-bottom: chocolate 2px solid;
}
</style>