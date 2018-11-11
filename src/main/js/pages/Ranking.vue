<template lang="html">
  <div id="ranking">
    <global-header></global-header>
    <search-condition-area class="searchConditionArea ml-3 mt-4"></search-condition-area>
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

<style lang="less">

.searchConditionArea {
  width: 320px;
  height: 380px;
}
</style>
