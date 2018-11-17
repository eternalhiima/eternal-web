<template lang="html">
  <div id="talkTheme">
    <b-container fluid >
      <b-row class="mb-2">
        <b-col md="3">
          <b-row>
            <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="160" height="90" alt="Thumbnail" />
          </b-row>
          <b-row>
            <p class="hi-text-light">{{ talkTheme.postedUser }}</p>
          </b-row>
          <b-row>
            <p class="hi-text-light">{{ parseDateTime(talkTheme.postedDateTime) }}</p>
          </b-row>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col>
              <p class="hi-text-subTitle">{{ talkTheme.title }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="hi-text-normal">{{ talkTheme.description}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <p class="text-primary hi-text-light">GOOD {{ talkTheme.goodCount }}</p>
            </b-col>
            <b-col md="3">
              <p class="text-danger hi-text-light">BAD {{ talkTheme.badCount }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="hi-text-light">トーク数 {{ talkTheme.talkedCount }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-badge pill variant="light" class="mr-1 text-muted" v-for="category in talkTheme.relatedCategoryList" v-bind:key="category.name">
                <font-awesome-icon icon="tag" class="tag"/> {{ category.name }}
              </b-badge>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'talk-theme',
  data () {
    return {
      // TODO:画像の保存先のパスはAWSS3に変更
      imgSrc: require(`@/resources/static/images/${this.talkTheme.thumbnailUrl}`)
    }
  },
  props: {
    talkTheme: {
      type: TalkThemeDto,
      required: false
    }
  },
  methods: {
    parseDateTime: (dateTime) => DateUtil.parseDateTimeForDisplay(dateTime)
  }
}
</script>

<style lang="less">

</style>
