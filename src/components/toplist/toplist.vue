<template>
  <div>
    <transition name='view'>
    <keep-alive>
      <top-list-view v-show="listshow" @toplistid='gettopid'></top-list-view>
    </keep-alive>
    </transition>
    <transition name='view'>
      <router-view @listgo='changgeshow'></router-view>
    </transition>
  </div>

</template>

<script type="text/ecmascript-6">

import TopListView from 'com/toplist/toplistview'

export default {
  data() {
    return {
      toplist: [],
      listshow:true
    };
  },
  
  components: {
    TopListView
  },
  methods: {
    gettopid(item){
      this.$router.push({
         path:`/toplist/topplaylist/${item.id}`
      })
      this.listshow = false
    },
    changgeshow(){
      this.listshow = true
    }
  }
};
</script>

<style scoped>
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