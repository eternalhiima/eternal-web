<template lang='html'>
  <div id='talkThemeList'>
    <h2 v-if="title !== null" class="hi-text-title my-1">{{ title }}</h2>
    <ol v-for="talkTheme in talkThemeList" :key="talkTheme.id">
      <talk-theme :talkTheme="talkTheme" :isOverView="isOverView"/>
    </ol>
  </div>
</template>

<script>
import TalkTheme from '@/main/js/components/TalkTheme.vue'

export default {
  name: 'talk-theme-list',
  components: {
    talkTheme: TalkTheme
  },
  props: {
    title: {
      type: String,
      default: null,
      required: false
    },
    talkThemeList: {
      type: Array,
      required: false
    },
    isOverView: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}

</script>

<style lang='less'>
</style>
