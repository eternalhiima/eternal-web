<template lang="html">
  <div id="RandomTalkPanel">
    <b-container fluid class="randomCon mt-5">
      <b-row align-h="center">
        <!--トークレベル-->
        <p class="m-3 hi-text-title">
          {{ talkLevel }}
        </p>
      </b-row>
      <!--トークレベル選択レンジ-->
      <b-row align-h="center">
        <label class="w-50 my-5">
          <input class="w-100"
                 v-model="talkLevelValue"
                 min="0" max="800"
                 type="range"/>
        </label>
      </b-row>
      <lets-talk-button class="mt-5"/>
    </b-container>
  </div>
</template>

<script>
import LetsTalkButton from '@/main/js/components/LetsTalkButton.vue'
import CategoryLevelType from '@/main/js/type/CategoryLevelType'

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
      return CategoryLevelType.getNameByLevel(Math.round(this.talkLevelValue / 200))
    }
  }
}
</script>

<style lang="less" scoped>
</style>
