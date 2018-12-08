<template lang="html">
  <div id="letsTalkButton">
    <b-row align-h="center">
      <!--トークボタン-->
      <b-btn v-b-modal.letsTalkModal
             size="lg"
             class="m-3"
             variant="primary">
        Let's talk
      </b-btn>
    </b-row>
    <!-- モーダルウィンドウ -->
    <b-modal id="letsTalkModal"
             hide-footer
             centered
             :title="this.talkTheme.title">
      <category-tag :name="category.name"
                    v-for="category in this.talkTheme.categoryList"
                    :key="category.id"
                    class="ml-1">
      </category-tag>
      <p class="ml-1">{{ this.talkTheme.description }}</p>
      <b-row align-h="center">
        <!--トーク詳細ボタン-->
        <b-btn :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}"
               size="lg"
               class="m-3"
               variant="primary">
          詳細へ
        </b-btn>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'
import CategoryTag from '@/main/js/components/CategoryTag.vue'
// テストデータ（TODO:トークID？によって対象のトークテーマをAPIより取得する）
const talkTheme1 = new TalkThemeDto(1, 1, 'タイトル1', 'this talk theme is ...', 'thumbnail_sample1.png', 100, 50, 200, [{name: 'tag1'}, {name: 'tag2'}], 'fugaさん', '201811111200')

export default {
  name: 'lets-talk-button',
  components: {
    categoryTag: CategoryTag
  },
  data () {
    return {
      talkTheme: talkTheme1
    }
  }
}
</script>

<style lang="less" scoped>
</style>
