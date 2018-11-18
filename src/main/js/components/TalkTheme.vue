<template lang="html">
  <div id="talkTheme">
    <b-container fluid >
      <b-row class="mb-2">
        <b-col md="3">
          <b-row>
            <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}">
              <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="160" height="90" alt="Thumbnail" />
            </b-link>
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
              <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}" class="hi-text-subTitle">
                {{ talkTheme.title }}
              </b-link>
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
          <b-row align-h="start">
            <b-col md="3" align-self="start" v-for="category in talkTheme.categoryList">
              <category-tag :key="category.id"
                            :name="category.name"/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CategoryTag from '@/main/js/components/CategoryTag.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'talk-theme',
  components: {
    categoryTag: CategoryTag
  },
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
