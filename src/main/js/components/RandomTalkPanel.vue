<template lang="html">
  <div id="RandomTalkPanel">
    <b-container fluid class="randomCon mt-5">
      <b-row align-h="center">
        <!--トークレベル-->
        <p class="m-3">
          {{ talkLevel }}
        </p>
      </b-row>
      <!--トークレベル選択レンジ-->
      <b-row align-h="center">
        <label class="w-50">
          <input class="w-100"
                 v-model="talkLevelValue"
                 min="0" max="800"
                 type="range"/>
        </label>
      </b-row>
      <lets-talk-button></lets-talk-button>
    </b-container>
  </div>
</template>

<script>
import LetsTalkButton from '@/main/js/components/LetsTalkButton.vue'
// TODO:マスタ化
const levels = ['下ネタ', 'カジュアル', '普通', 'フォーマル', '知的']

export default {
  name: 'random-talk-panel',
  components: {
    letsTalkButton: LetsTalkButton
  },
  data () {
    return {
      talkLevelValue: 400
    }
  },
  computed: {
    talkLevel () {
      return levels[Math.round(this.talkLevelValue / 200)]
    }
  }
}
</script>

<style lang="less" scoped>
</style>
