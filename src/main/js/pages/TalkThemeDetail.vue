<template lang="html">
  <div id="tailThemeDetail">
    <global-header/>
    <b-container fluid>
      <b-row lg="12" md="12" sm="12">
        <b-col>
          <talk-theme-detail-main-panel :talkTheme="this.talkTheme"/>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col lg="8" md="8" sm="12">
          <comment-panel :commentList="commentList"/>
        </b-col>
        <b-col lg="4" md="4" sm="12">
          <talk-theme-list :title="recommendTalkTitle" :talkThemeList="talkThemeList" :isOverView="true"/>
        </b-col>
      </b-row>
    </b-container>
    <post-talk/>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import TalkThemeDetailMainPanel from '@/main/js/components/TalkThemeDetailMainPanel.vue'
import CommentPanel from '@/main/js/components/CommentPanel.vue'
import TalkThemeList from '@/main/js/components/TalkThemeList.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'
import CommentDto from '@/main/js/dto/CommentDto'

// テストデータ(メイン)
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
// テストデータ(レコメンド)
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme3 = new TalkThemeDto(3, 3, 'タイトル3', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}], 'fugaさん', '201811111200')
const talkTheme4 = new TalkThemeDto(4, 4, 'タイトル4', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}, {name: 'tag4'}], 'fugaさん', '201811111200')
const talkTheme5 = new TalkThemeDto(5, 5, 'タイトル5', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme6 = new TalkThemeDto(6, 6, 'タイトル6', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme7 = new TalkThemeDto(7, 7, 'タイトル7', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme8 = new TalkThemeDto(8, 8, 'タイトル8', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
// コメントリスト
const commentDto1 = new CommentDto(1, '大友康弘', 'user_profile_sample.jpg', '楽しかった！', '201811111200')
const commentDto2 = new CommentDto(2, '大友康弘', null, 'つまらなかった！', '201811111500')

export default {
  name: 'TalkThemeDetail',
  components: {
    globalHeader: GlobalHeader,
    postTalk: PostTalk,
    talkThemeDetailMainPanel: TalkThemeDetailMainPanel,
    commentPanel: CommentPanel,
    talkThemeList: TalkThemeList
  },
  data () {
    return {
      talkTheme: null,
      commentList: [],
      talkThemeList: [],
      recommendTalkTitle: 'オススメのトークテーマ'
    }
  },
  created () {
    // TODO: 受け取ったtalkThemeIdをもとにトークテーマをAPIで取得する
    const talkThemeId = this.$route.params.talkThemeId
    this.talkTheme = talkTheme1

    // TODO: コメントリストの取得
    const commentList = [commentDto1, commentDto2]
    this.commentList = commentList

    // TODO: APIでオススメのトークテーマリストを取得する
    const talkThemeList = [talkTheme1, talkTheme2, talkTheme3, talkTheme4, talkTheme5, talkTheme6, talkTheme7, talkTheme8]
    this.talkThemeList = talkThemeList
  }
}
</script>

<style lang="less">
</style>
