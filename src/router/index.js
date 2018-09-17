import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Random from '@/pages/Random.vue'
import Ranking from '@/pages/Ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/random',
      name: 'Random',
      component: Random
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})
