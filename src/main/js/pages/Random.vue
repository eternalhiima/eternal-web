<template lang="html">
  <div id="Random">
    <global-header/>
    <random-talk-panel/>
    <post-talk/>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import RandomTalkPanel from '@/main/js/components/RandomTalkPanel.vue'

export default {
  name: 'Random',
  components: {
    globalHeader: GlobalHeader,
    postTalk: PostTalk,
    randomTalkPanel: RandomTalkPanel
  }
}
</script>

<style lang="less" scoped>
</style>
