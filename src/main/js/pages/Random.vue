<template lang="html">
  <div id="Random">
    <random-talk-panel/>
  </div>
</template>

<script>
import RandomTalkPanel from '@/main/js/components/RandomTalkPanel.vue'

export default {
  name: 'Random',
  components: {
    randomTalkPanel: RandomTalkPanel
  }
}
</script>

<style lang="less" scoped>
</style>
