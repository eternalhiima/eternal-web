<template lang="html">
  <div id="talkThemeList">
    <p>TalkThemeList</p>
    <ul>
      <li v-for="talkTheme in talkThemeList" v-bind:key="talkTheme.id">
        <talk-theme></talk-theme>
      </li>
    </ul>
  </div>
</template>

<script>
import TalkTheme from '@/main/js/components/TalkTheme.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto.js'

export default {
  name: 'talk-theme-list',
  components: {
    talkTheme: TalkTheme
  },
  data () {
    talkThemeList: []
  }
}
</script>

<style lang="less">
</style>
