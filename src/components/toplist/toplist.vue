<template>
  <div>
    <keep-alive>
      <top-list-view v-show="listshow" @toplistid='gettopid'></top-list-view>
    </keep-alive>
    <router-view @listgo='changgeshow'></router-view>
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
      // console.log(item.id)
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


</style>