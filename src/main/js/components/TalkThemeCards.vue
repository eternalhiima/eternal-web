<template lang='html'>
  <div id='talkThemeCards'>
    <b-card-group deck v-for="cardRowList in talkThemeFlatMap" :key="cardRowList" class="m-1">
      <b-card v-for="talkTheme in cardRowList"
              :key="talkTheme.id"
              border-variant="light"
              :img-src="resolveSrcPath(talkTheme.thumbnailUrl)"
              img-alt="Thumbnail"
              img-top
              align="left"
              no-body
              class="card">
        <p class="hi-text-normal">{{ talkTheme.title }}</p>
        <p class="hi-text-light">{{ talkTheme.postedUser }}</p>
        <p class="hi-text-light">{{ talkTheme.goodCount}}トーク</p>
        <p class="hi-text-light">{{ parseDateTime(talkTheme.postDateTime) }}</p>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import DateUtil from '@/main/js/util/DateUtil'
import CollectionUtil from '@/main/js/util/CollectionUtil'

export default {
  name: 'talk-theme-cards',
  data () {
    return {
      talkThemeFlatMap: []
    }
  },
  props: {
    talkThemeList: {
      type: Array,
      required: false
    }
  },
  methods: {
    resolveSrcPath: (thumbnailUrl) => require(`@/resources/static/images/${thumbnailUrl}`),
    parseDateTime: (dateTime) => DateUtil.parseDateTimeForDisplay(dateTime)
  },
  mounted () {
    const cols = innerWidth < 1080 ? Math.floor(innerWidth / 190) : Math.floor((innerWidth - 392) / 190)
    const rows = Math.ceil(this.talkThemeList.length / cols)
    this.talkThemeFlatMap = CollectionUtil.convert2DArray(this.talkThemeList, rows, cols)
  }
}
</script>

<style lang='less' scoped>
.card {
  max-width: 160px;
  width: 160px;
  height: 176px;
}
</style>
