<template lang="html">
  <div id="home">
    <global-header></global-header>
    <p>HelloWorld1</p>
    <h2>取得したjson</h2>
    <p>{{ helloJson }}</p>
    <h2>取得したjsonのdata</h2>
    <p>{{ convert }}</p>
  </div>
  </template>

<script>
import axios from 'axios'
import GlobalHeader from '../components/Header.vue'

export default {
  data () {
    return {
      helloWorld: 'HelloWorld2',
      helloJson: null,
      name: []
    }
  },
  mounted () {
    axios.get('http://localhost:8090/hellojson')
      .then(response => (this.helloJson = response))
      .catch(console.log('[Error]Axios error'))
  },
  computed: {
    convert () {
      if (this.helloJson != null) {
        var data = JSON.stringify(this.helloJson.data);
        console.log(data);
        return data;
      } else {
        return '取得中...';
      }
    }
  },
  name: 'HelloWorld',
  components: {
    globalHeader: GlobalHeader
  }
}
</script>

<style lang="less">
</style>
