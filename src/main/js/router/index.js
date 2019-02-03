import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/main/js/pages/Home.vue'
import Random from '@/main/js/pages/Random.vue'
import Ranking from '@/main/js/pages/Ranking.vue'
import Search from '@/main/js/pages/Search.vue'
import TalkThemeDetail from '@/main/js/pages/TalkThemeDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'hiima'
      }
    },
    {
      path: '/random',
      name: 'Random',
      component: Random,
      meta: {
        title: 'hiima | ランダム'
      }
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking,
      meta: {
        title: 'hiima | ランキング'
      }
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search,
      meta: {
        title: 'hiima | 検索結果'
      }
    },
    {
      path: '/talk/:talkThemeId',
      name: 'TalkThemeDetail',
      component: TalkThemeDetail,
      meta: {
        title: 'hiima | トークテーマ詳細'
      }
    }
  ]
})
