<template lang="html">
  <div id="searchConditionArea" class="bg-light p-2">
    <h3 class="p-1 m-1">ランキング検索</h3>
    <p class="p-1 m-1">人気のトークテーマ</p>
    <ul>
      <li>
        <!-- 総合ランキングは常にトップに表示 -->
        <b-link class="listItem">総合ランキング</b-link>
      </li>
      <li v-for="item in popularRankingList" v-bind:key="item.name">
        <b-link>{{ item.name }}</b-link>
      </li>
    </ul>
    <b-container fluid>
      <b-row class="my-1">
        <b-col md="5">
          <p>カテゴリ：</p>
        </b-col>
        <b-col sm="10" md="7">
          <b-form-select v-model="selectedCategory" :options="categoryList" :select-size="1"></b-form-select>
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
export default {
  name: 'search-condition-area',
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
      categoryList: ['カテゴリ1', 'カテゴリ2', 'カテゴリ3', 'カテゴリ4', 'カテゴリ5', 'カテゴリ6']
    }
  }
}
</script>

<style lang="less">

</style>
