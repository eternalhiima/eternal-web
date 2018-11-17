<template lang="html">
  <div id="ranking">
    <global-header />
    <b-container fluid>
      <b-row>
        <b-col md="12" lg="3">
          <search-condition-area class="ml-3 mt-4" />
        </b-col>
        <b-col md="12" lg="7">
          <talk-theme-list class="mt-4"/>
        </b-col>
        <b-col md="12" lg="2">
          <!-- TODO:広告エリア -->
          <div class="ad"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import SearchConditionArea from '@/main/js/components/SearchConditionArea.vue'
import TalkThemeList from '@/main/js/components/TalkThemeList.vue'

export default {
  name: 'Ranking',
  components: {
    globalHeader: GlobalHeader,
    searchConditionArea: SearchConditionArea,
    talkThemeList: TalkThemeList
  }
}
</script>

<style lang="less">
</style>
