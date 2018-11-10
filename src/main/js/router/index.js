import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/main/js/pages/Home.vue'
import Random from '@/main/js/pages/Random.vue'
import Ranking from '@/main/js/pages/Ranking.vue'
// Test
import HelloWorld from '@/main/js/pages/HelloTest.vue'

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
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})