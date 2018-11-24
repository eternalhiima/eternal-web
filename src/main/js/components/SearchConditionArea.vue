<template lang="html">
  <div id="searchConditionArea" class="bg-light p-2">
    <h3 class="p-1 m-1">ランキング検索</h3>
    <p class="p-1 m-1">人気のトークテーマ</p>
    <ul>
      <li>
        <!-- 総合ランキングは常にトップに表示 -->
        <b-link class="listItem">総合ランキング</b-link>
      </li>
      <li v-for="item in popularRankingList" :key="item.name">
        <b-link>{{ item.name }}</b-link>
      </li>
    </ul>
    <b-container fluid>
      <b-row class="my-1">
        <b-col md="5" class="mx-0 pl-1 pr-0">
          <p>カテゴリ：</p>
        </b-col>
        <b-col sm="10" md="7" class="pl-0">
          <incremental-search :placeholder="'カテゴリを選択'"
                              :suggestData="categoryList" />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col md="3" offset-md="9">
          <b-button variant="primary">表示</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IncrementalSearch from '@/main/js/components/IncrementalSearch.vue'
import CategoryDto from '@/main/js/dto/CategoryDto.js'

// テストデータ
const categoryDto1 = new CategoryDto(1, 'hoge')
const categoryDto2 = new CategoryDto(2, 'fuga')
const categoryDto3 = new CategoryDto(3, 'hoge2')
const categoryDto4 = new CategoryDto(4, 'hogefuga4')
const categoryDto5 = new CategoryDto(5, 'トーク1')
const categoryDto6 = new CategoryDto(6, 'カテゴリ2')

export default {
  name: 'search-condition-area',
  components: {
    incrementalSearch: IncrementalSearch
  },
  data () {
    return {
      // TODO:人気のトークテーマリストはRef001_トークテーマ一覧取得より取得
      popularRankingList: [
        {name: '人気のトークテーマ'},
        {name: '人気のトークテーマ'},
        {name: '人気のトークテーマ'},
        {name: '人気のトークテーマ'}],
      selectedCategory: null,
      // TODO:カテゴリのリストはRef003_トークテーマジャンル一覧取得より取得
      categoryList: [categoryDto1, categoryDto2, categoryDto3, categoryDto4, categoryDto5, categoryDto6]
    }
  }
}
</script>

<style lang="less">

</style>
