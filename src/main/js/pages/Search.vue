<template lang="html">
  <div id="search">
    <search-condition-panel :isSearchMode="true" class="searchConditionPanel" />
    <talk-theme-cards :talkThemeList="talkThemeList" class="talkThemeCards"/>
    <!-- <div class="ad">広告</div> -->
  </div>
</template>

<script>
import SearchConditionPanel from '@/main/js/components/SearchConditionPanel.vue'
import TalkThemeCards from '@/main/js/components/TalkThemeCards.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータの準備
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', null, 'thumbnail_sample1.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', null, 'thumbnail_sample2.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme3 = new TalkThemeDto(3, 3, 'タイトル3', null, 'thumbnail_sample1.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme4 = new TalkThemeDto(4, 4, 'タイトル4', null, 'thumbnail_sample2.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme5 = new TalkThemeDto(5, 5, 'タイトル5', null, 'thumbnail_sample1.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme6 = new TalkThemeDto(6, 6, 'タイトル6', null, 'thumbnail_sample2.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme7 = new TalkThemeDto(7, 7, 'タイトル7', null, 'thumbnail_sample1.png', 100, 50, 200, null, 'fugaさん', '201811111200')
const talkTheme8 = new TalkThemeDto(8, 8, 'タイトル8', null, 'thumbnail_sample2.png', 100, 50, 200, null, 'fugaさん', '201811111200')

export default {
  name: 'Search',
  components: {
    searchConditionPanel: SearchConditionPanel,
    talkThemeCards: TalkThemeCards
  },
  data () {
    return {
      talkThemeList: []
    }
  },
  created () {
    // TODO: APIでトークテーマリストを取得
    const talkThemeList = [talkTheme1, talkTheme2, talkTheme3, talkTheme4, talkTheme5, talkTheme6, talkTheme7, talkTheme8]
    this.talkThemeList = talkThemeList
  }
}
</script>

<style lang="less" scoped>
@import "./../../../resources/static/less/base";

.searchConditionPanel {
  margin: 8px;
  @media @app, @tab {
    width: 100%;
  }
  @media @pc {
    float: left;
    width: 360px;
    position: fixed;
    top: 24;
    left: 0;
  }
}
.talkThemeCards {
  margin: 8px;
  @media @app, @tab {
    width: 100%;
  }
  @media @pc {
    width: 100%;
    float: right;
    margin-left: -384px;
    padding-left: 384px;
    box-sizing: border-box;
  }
}
</style>
