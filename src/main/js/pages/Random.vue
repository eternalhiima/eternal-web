<template lang="html">
  <div id="Random">
    <global-header></global-header>
    <random-talk-panel></random-talk-panel>
    <post-talk></post-talk>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import RandomTalkPanel from '@/main/js/components/RandomTalkPanel.vue'

// TODO:マスタ化
const levels = ['下ネタ', 'カジュアル', '普通', 'フォーマル', '知的']

export default {
  name: 'Random',
  components: {
    globalHeader: GlobalHeader,
    postTalk: PostTalk,
    randomTalkPanel: RandomTalkPanel
  },
  data () {
    return {
      talkLevelValue: 400
    }
  },
  computed: {
    talkLevel () {
      return levels[Math.round(this.talkLevelValue / 200)]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
