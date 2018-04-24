<template>
    <div id="m-body">
        <ul>
            <router-link to='/recommend' tag='li'><span>推荐</span></router-link>
            <router-link to='/toplist' tag='li'><span>排行</span></router-link>
            <router-link to='/search' tag='li'><span>搜索</span></router-link>
        </ul>
        <transition name='view'>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        </transition>
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
    color: rgb(202, 245, 245);
    background: grey;
}
li span{
    display: inline-block;
    padding: 5px;
    
}
.router-link-active{
    color: rgb(174, 194, 199);
}
.router-link-active {
    border-bottom: rgb(174, 194, 199) 2px solid;
}
.view-enter-active{
  transition: all .3s ease;
}
.view-leave-active {
  transition: all .5s ease;
}
.view-enter{
  transform: translateX(150%);
  opacity: 0;
}
.view-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>