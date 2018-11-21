<template lang="html">
  <div id="home">
    <global-header/>
    <trends-area :trendItemList="trendItemList"/>
    <post-talk/>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import TrendsArea from '@/main/js/components/TrendsArea.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータ
const talkTheme1 = new TalkThemeDto(1, 1, 'トークテーマ1')
const talkTheme2 = new TalkThemeDto(2, 2, 'トークテーマ2')
const talkTheme3 = new TalkThemeDto(3, 3, 'トークテーマ3')
const talkTheme4 = new TalkThemeDto(4, 4, 'トークテーマ4')
const talkTheme5 = new TalkThemeDto(5, 5, 'トークテーマ5')
const talkTheme6 = new TalkThemeDto(6, 6, 'トークテーマ6')
const talkTheme7 = new TalkThemeDto(7, 7, 'トークテーマ7')
const talkTheme8 = new TalkThemeDto(8, 8, 'トークテーマ8')
const talkTheme9 = new TalkThemeDto(9, 9, 'トークテーマ9')
const talkTheme10 = new TalkThemeDto(10, 10, 'トークテーマ10')

export default {
  name: 'Home',
  components: {
    globalHeader: GlobalHeader,
    trendsArea: TrendsArea,
    postTalk: PostTalk
  },
  data () {
    return {
      // TODO: APIから取得する
      // トレンドアイテムが重なった時に上に高順位が来るように降順にソートする->API?
      trendItemList: [talkTheme10, talkTheme9, talkTheme8, talkTheme7, talkTheme6, talkTheme5, talkTheme4, talkTheme3, talkTheme2, talkTheme1]
    }
  }
}
</script>

<style lang="less">
</style>
