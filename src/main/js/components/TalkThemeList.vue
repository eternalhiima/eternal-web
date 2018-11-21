<template lang='html'>
  <div id='talkThemeList'>
    <ol>
      <talk-theme v-for="talkTheme in talkThemeList" v-bind:key="talkTheme.id" :talkTheme="talkTheme"></talk-theme>
    </ol>
  </div>
</template>

<script>
import TalkTheme from '@/main/js/components/TalkTheme.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータの準備
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')

export default {
  name: 'talk-theme-list',
  components: {
    talkTheme: TalkTheme
  },
  data () {
    return {
      talkThemeList: [talkTheme1, talkTheme2, talkTheme1, talkTheme2, talkTheme1, talkTheme2, talkTheme1, talkTheme2, talkTheme1, talkTheme2, talkTheme1, talkTheme2]
    }
  }
}

</script>

<style lang='less'>
</style>
