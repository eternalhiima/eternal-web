<template lang="html">
  <div id="ranking">
    <global-header></global-header>
    <search-condition-area class="w-25 ml-3 mt-4"></search-condition-area>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import SearchConditionArea from '@/main/js/components/SearchConditionArea.vue'

export default {
  name: 'Ranking',
  components: {
    globalHeader: GlobalHeader,
    searchConditionArea: SearchConditionArea
  }
}
</script>

<style lang="less" scoped>
/** 共通Lessのインポート */
@import "./../../../resources/static/less/base";

</style>
