<template lang="html">
  <div id="home">
    <global-header></global-header>
    <p>HelloWorld1</p>
    <h2>取得したjson</h2>
    <p>{{ helloJson }}</p>
    <h2>Jsonを加工</h2>
    <ul id="names">
      <li v-for="name in helloJson">
        {{ name }}
      </li>
    </ul>
  </div>
  </template>

<script>
import GlobalHeader from '../components/Header.vue'
import api from '../api/Api.js'

export default {
  data () {
    return {
      helloWorld: 'HelloWorld2',
      helloJson: null,
      name: []
    }
  },
  mounted () {
    api.get('hellojson').then(res => {
      this.helloJson = res
      console.log(res)
    })
  },
  name: 'HelloWorld',
  components: {
    globalHeader: GlobalHeader
  }
}
</script>

<style lang="less">
</style>
