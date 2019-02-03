<template lang="html">
  <div id="talkTheme">
    <!-- 概要表示 -->
    <template v-if="isOverView">
      <b-container fluid>
        <b-row>
          <b-col>
            <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}">
              <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="160" height="90" alt="Thumbnail" />
            </b-link>
          </b-col>
          <b-col>
            <b-row>
              <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}" class="hi-text-normal">
                {{ talkTheme.title }}
              </b-link>
            </b-row>
            <b-row>
              <p class="hi-text-light">{{ talkTheme.postUser }}</p>
            </b-row>
            <b-row>
              <p class="hi-text-light">トーク数 {{ talkTheme.talkCount }}</p>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <!-- 詳細表示 -->
    <template v-else>
      <b-container fluid>
        <b-row class="mb-2">
          <b-col md="3">
            <b-row>
              <b-link :to="{name: 'TalkThemeDetail', params: {talkThemeId: talkTheme.id}}">
                <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="160" height="90" alt="Thumbnail" />
              </b-link>
            </b-row>
            <b-row>
              <p class="hi-text-light">{{ talkTheme.postUser }}</p>
            </b-row>
            <b-row>
              <p class="hi-text-light">{{ parseDateTime(talkTheme.postDateTime) }}</p>
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
                <p class="hi-text-light">トーク数 {{ talkTheme.talkCount }}</p>
              </b-col>
            </b-row>
            <b-row align-h="start">
              <b-col md="3" align-self="start" v-for="category in talkTheme.categoryList" :key="category.id">
                <category-tag :name="category.name"/>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </template>
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
    },
    isOverView: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    parseDateTime: (dateTime) => DateUtil.parseDateTimeForDisplay(dateTime)
  }
}
</script>

<style lang="less">

</style>
