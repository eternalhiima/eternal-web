<template lang="html">
  <div id="Random">
    <global-header></global-header>

    <!-- genre select box -->
    <div id="genreSelect"
         class="text-center">
      <b-form-select id="genreInput"
                     class="w-50 m-3"
                     :options="genre"
                     required
                     v-model="form.food"
                     v-b-popover.hover.right="'Select a Genre!'">
      </b-form-select>
    </div>

    <!-- talk level -->
    <div id="talkLevel"
         class="text-center">
      <p class="m-3">
        {{ levels[text1] }}
      </p>
    </div>

    <!-- range -->
    <div id="levelRange"
         class="text-center">
      <label class="w-50">
        <input class="w-100"
               v-model="text1"
               min="0" max="4"
               v-b-popover.hover.right="'Select Level!'"
               type="range"/>
      </label>
    </div>

    <!-- talk button -->
    <div id="talkButton"
         class="text-center">
      <b-button size="lg"
                class="m-3"
                variant="primary"
                v-b-popover.hover.right="'Start Talking!'">
        Let's talk
      </b-button>
    </div>

  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'

export default {
  data () {
    return {
      form: {
        food: null
      },
      // TODO:マスタ化
      genre: [
        {text: 'Select a genre', value: null},
        'life', 'love', 'work', 'other'
      ],
      // TODO:マスタ化
      levels: ['下ネタ', 'カジュアル', '普通', 'フォーマル', '知的'],
      text1: '2'
    }
  },
  name: 'Random',
  components: {
    globalHeader: GlobalHeader
  }
}
</script>

<style lang="less">
  /* temp css */
</style>
