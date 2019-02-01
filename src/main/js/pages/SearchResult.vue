<template lang="html">
  <div id="searchResult">
    <global-header />
    <b-container fluid>
      <b-row>
        <b-col md="12" lg="4">
          <search-condition-panel :isSearchMode="true" class="ml-1 mt-2" />
        </b-col>
        <b-col md="12" lg="7">
          <talk-theme-list :talkThemeList="talkThemeList" class="mt-2"/>
        </b-col>
        <b-col md="12" lg="1" class="bg-warning">
          <!-- TODO:広告エリア -->
          <div class="ad">広告</div>
        </b-col>
      </b-row>
    </b-container>
    <post-talk />
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import SearchConditionPanel from '@/main/js/components/SearchConditionPanel.vue'
import TalkThemeList from '@/main/js/components/TalkThemeList.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータの準備
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme3 = new TalkThemeDto(3, 3, 'タイトル3', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}], 'fugaさん', '201811111200')
const talkTheme4 = new TalkThemeDto(4, 4, 'タイトル4', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}, {name: 'tag4'}], 'fugaさん', '201811111200')
const talkTheme5 = new TalkThemeDto(5, 5, 'タイトル5', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme6 = new TalkThemeDto(6, 6, 'タイトル6', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme7 = new TalkThemeDto(7, 7, 'タイトル7', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme8 = new TalkThemeDto(8, 8, 'タイトル8', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')

export default {
  name: 'SearchResult',
  components: {
    globalHeader: GlobalHeader,
    searchConditionPanel: SearchConditionPanel,
    talkThemeList: TalkThemeList,
    postTalk: PostTalk
  },
  data () {
    return {
      talkThemeList: []
    }
  },
  mounted () {
    // TODO: APIでトークテーマリストを取得
    const talkThemeList = [talkTheme1, talkTheme2, talkTheme3, talkTheme4, talkTheme5, talkTheme6, talkTheme7, talkTheme8]
    this.talkThemeList = talkThemeList
  }
}
</script>

<style lang="less">
</style>
