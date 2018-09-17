<template lang="html">
  <div id="home">
    <global-header></global-header>
    <p>HOME</p>
  </div>
</template>

<script>
import GlobalHeader from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    globalHeader: GlobalHeader
  }
}
</script>

<style lang="less">
</style>
