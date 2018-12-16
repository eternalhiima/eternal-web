<template lang="html">
  <div id="tailThemeDetail">
    <global-header/>
    <talk-theme-detail-main-panel :talkTheme="talkTheme" class="ml-2"/>
    <comment-panel class="mt-2 ml-2"/>
    <recommend-theme-view-panel class="mt-2"/>
    <post-talk/>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import TalkThemeDetailMainPanel from '@/main/js/components/TalkThemeDetailMainPanel.vue'
import CommentPanel from '@/main/js/components/CommentPanel.vue'
import RecommendThemeViewPanel from '@/main/js/components/RecommendThemeViewPanel.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータの準備
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')

export default {
  name: 'TalkThemeDetail',
  components: {
    globalHeader: GlobalHeader,
    postTalk: PostTalk,
    talkThemeDetailMainPanel: TalkThemeDetailMainPanel,
    commentPanel: CommentPanel,
    recommendThemeViewPanel: RecommendThemeViewPanel
  },
  data () {
    return {
      talkTheme: null
    }
  },
  mounted () {
    // TODO:受け取ったtalkThemeIdをもとにトークテーマをAPIで取得する
    const talkThemeId = this.$route.params.talkThemeId
    this.talkTheme = talkTheme1
  }
}
</script>

<style lang="less">
</style>
