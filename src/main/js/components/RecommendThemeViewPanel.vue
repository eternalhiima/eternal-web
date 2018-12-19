<template lang="html">
  <div id="recommendThemeViewPanel">
    <b-container fluid>
      <b-row>
        <b-col>
          <p>あなたにおすすめのトークテーマ</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ol v-for="talkTheme in talkThemeList" :key="talkTheme.id">
            <talk-theme :talkTheme="talkTheme" />
          </ol>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TalkTheme from '@/main/js/components/TalkTheme.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータの準備
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')

export default {
  name: 'RecommendThemeViewPanel',
  components: {
    talkTheme: TalkTheme
  },
  data () {
    return {
      talkThemeList: [talkTheme1, talkTheme2]
    }
  }
}
</script>

<style lang="less">
</style>
