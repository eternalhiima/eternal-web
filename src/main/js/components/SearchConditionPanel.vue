<template lang="html">
  <div id="searchConditionPanel" class="bg-light px-1 py-2">
    <h3 class="p-1 m-1">ランキング検索</h3>
    <p class="p-1 m-1">人気のトークテーマ</p>
    <ul>
      <li>
        <!-- 総合ランキングは常にトップに表示 -->
        <!-- TODO: ランキングページのルーターにパラメータでどのランキングかを渡せるようにする -->
        <b-link :to="{name: 'Ranking'}" class="listItem">
          総合ランキング
        </b-link>
      </li>
      <li v-for="talkTheme in popularRankingList" :key="talkTheme.id">
        <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}">
          {{ talkTheme.title }}
        </b-link>
      </li>
    </ul>

    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="12" md="2" lg="5" xl="3">
          <p>カテゴリ：</p>
        </b-col>
        <b-col sm="12" md="10" lg="7" xl="9">
          <incremental-search :placeholder="'カテゴリを選択'"
                              :suggestData="categoryList" />
        </b-col>
      </b-row>
      <b-row class="my-1" v-if="isSearchMode">
        <b-col>
          <b-form-input v-model="searchTextInput"
                        type="text"
                        placeholder="検索"
                        size="sm"/>
        </b-col>
      </b-row>
      <b-row class="my-1" v-if="isSearchMode">
        <b-col>
          <b-form-group>
            <b-form-radio-group v-model="selectedSortType" stacked>
              <b-form-radio value="1">高評価順</b-form-radio>
              <b-form-radio value="2">投稿日順</b-form-radio>
            </b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col md="3" offset-md="9">
          <b-button variant="primary">表示</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IncrementalSearch from '@/main/js/components/IncrementalSearch.vue'
import CategoryDto from '@/main/js/dto/CategoryDto'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

// テストデータ
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme2 = new TalkThemeDto(2, 2, 'タイトル2', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')
const talkTheme3 = new TalkThemeDto(3, 3, 'タイトル3', 'hogehogehoge', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}], 'fugaさん', '201811111200')
const talkTheme4 = new TalkThemeDto(4, 4, 'タイトル4', 'hogehogehoge', 'thumbnail_sample2.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}, {name: 'tag3'}, {name: 'tag4'}], 'fugaさん', '201811111200')

const categoryDto1 = new CategoryDto(1, 'hoge')
const categoryDto2 = new CategoryDto(2, 'fuga')
const categoryDto3 = new CategoryDto(3, 'hoge2')
const categoryDto4 = new CategoryDto(4, 'hogefuga4')
const categoryDto5 = new CategoryDto(5, 'トーク1')
const categoryDto6 = new CategoryDto(6, 'カテゴリ2')

export default {
  name: 'search-condition-panel',
  components: {
    incrementalSearch: IncrementalSearch
  },
  data () {
    return {
      searchTextInput: '',
      selectedSortType: 1,
      // TODO:人気のトークテーマリストはRef001_トークテーマ一覧取得より取得
      popularRankingList: [talkTheme1, talkTheme2, talkTheme3, talkTheme4],
      selectedCategory: null,
      // TODO:カテゴリのリストはRef003_トークテーマジャンル一覧取得より取得
      categoryList: [categoryDto1, categoryDto2, categoryDto3, categoryDto4, categoryDto5, categoryDto6]
    }
  },
  props: {
    isSearchMode: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>

<style lang="less">

</style>
