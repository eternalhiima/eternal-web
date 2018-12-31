<template lang="html">
  <div id="talkThemeDetailMainPanel">
    <b-card :title="talkTheme.title" class="mt-3">
      <b-container fluid>
        <b-row class="mb-2">
          <b-col md="4" sm="6">
            <b-img-lazy :src="imgSrc" rounded blank blank-color="#777" width="320" height="180" alt="Thumbnail" />
          </b-col>
          <b-col md="8" sm="6">
            <p class="hi-text-normal">{{ talkTheme.description}}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" sm="6">
            <p class="hi-text-light">{{ talkTheme.postedUser }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4" sm="6">
            <p class="hi-text-light">{{ parseDateTime(talkTheme.postedDateTime) }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="1" md="1" align-self="start" v-for="category in talkTheme.categoryList" :key="category.id">
            <category-tag :name="category.name"/>
          </b-col>
        </b-row>
        <hr>
        <b-row class="ml-1 mt-1">
          <b-button @click="onEvalGood" variant="outline-primary" size="sm" class="mx-1">
            <font-awesome-icon icon="thumbs-up" class="mr-1"/>{{ talkTheme.goodCount }}
          </b-button>
          <b-button @click="onEvalBad" variant="outline-danger" size="sm" class="mx-1">
            <font-awesome-icon icon="thumbs-down" class="mr-1"/>{{ talkTheme.badCount }}
          </b-button>
          <b-button @click="onShare" variant="outline-secondary" size="sm" class="mx-1">共有</b-button>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import CategoryTag from '@/main/js/components/CategoryTag.vue'
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'TalkThemeDetailMainPanel',
  components: {
    categoryTag: CategoryTag
  },
  props: {
    talkTheme: {
      type: TalkThemeDto,
      required: true
    }
  },
  data () {
    return {
      // TODO:画像の保存先のパスはAWSS3に変更
      imgSrc: require(`@/resources/static/images/${this.talkTheme.thumbnailUrl}`)
    }
  },
  methods: {
    parseDateTime: (dateTime) => DateUtil.parseDateTimeForDisplay(dateTime),
    onEvalGood (e) {
      this.talkTheme.goodCount++
      alert('Good')
    },
    onEvalBad (e) {
      this.talkTheme.badCount++
      alert('Bad')
    },
    onShare (e) {
      // TODO: SNSシェア用のモーダルを表示する
      alert('share')
    }
  }
}
</script>

<style lang="less">
</style>
