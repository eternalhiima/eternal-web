<template lang="html">
  <div id="talkTheme">
    <b-container fluid >
      <b-row>
        <b-col md="3">
          <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="160" height="90" alt="Thumbnail" />
          <p>{{ talkTheme.postedUser }}</p>
          <p>{{talkTheme.postedDateTime }}</p>
        </b-col>
        <b-col md="9">
          <p>{{ talkTheme.title }}</p>
          <p>{{ talkTheme.description}}</p>
          <p>GOOD {{ talkTheme.goodCount }}</p>
          <p>BAD {{ talkTheme.badCount }}</p>
          <p>{{ talkTheme.talkedCount }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

export default {
  name: 'talk-theme',
  data () {
    return {
      // TODO:画像の保存先のパスはAWSS3に変更
      imgSrc: require('@/resources/static/images/' + this.talkTheme.thumbnailUrl)
    }
  },
  props: {
    talkTheme: {
      type: TalkThemeDto,
      required: false
    }
  }
}
</script>

<style lang="less">
</style>
