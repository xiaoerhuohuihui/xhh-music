import Vue from 'vue'
import Router from 'vue-router'
import Toplist from 'com/toplist/toplist'
import TopPlaylist from 'com/toplist/topplaylist'
import Recommend from 'com/recommend/recommend'
import Singer from 'com/singer/singer'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: Toplist,
      children: [{
        path: '/toplist/topplaylist/:listId',
        name: 'topplaylist',
        component: TopPlaylist
      },]
    },
    
    
  ]
})
