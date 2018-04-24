import Vue from 'vue'
import Router from 'vue-router'
import Toplist from 'com/toplist/toplist'
import TopPlaylist from 'com/toplist/topplaylist'
import Recommend from 'com/recommend/recommend'
import Search from 'com/search/search'
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
      path: '/search',
      name: 'search',
      component: Search
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
