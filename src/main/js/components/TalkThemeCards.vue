<template lang='html'>
  <div id='talkThemeCards'>
    <b-card-group deck v-for="cardRowList in talkThemeFlatMap" :key="cardRowList">
      <b-card v-for="talkTheme in cardRowList"
              :key="talkTheme.id"
              border-variant="secondary"
              header-border-variant="secondary"
              :img-src="resolveSrcPath(talkTheme.thumbnailUrl)"
              img-alt="Thumbnail"
              img-top
              align="left"
              no-body
              class="card mb-2">
              <!-- TODO: カード内のレイアウト -->
          <p>{{ talkTheme.title }}</p>
          <p>{{ talkTheme.postedUser }}</p>
          <p>{{ talkTheme.goodCount}}トーク</p>
          <p>{{ parseDateTime(talkTheme.postDateTime) }}</p>
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
    const cols = innerWidth < 1080 ? Math.floor(innerWidth / 160) : Math.floor((innerWidth - 360) / 160)
    const rows = Math.ceil(this.talkThemeList.length / cols)
    this.talkThemeFlatMap = CollectionUtil.convert2DArray(this.talkThemeList, rows, cols)
  }
}

</script>

<style lang='less' scoped>
.card {
  max-width: 160px;
  width: 160px;
  height: 124px;
}
</style>
