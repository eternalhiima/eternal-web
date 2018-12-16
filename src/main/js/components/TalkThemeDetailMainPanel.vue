<template lang="html">
  <div id="talkThemeDetailMainPanel">
    <b-card :title="this.talkTheme.title" class="mt-3">
      <b-row>
        <b-col sm="12" md="4" lg="4">
          <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" alt="Thumbnail"></b-img-lazy>
        </b-col>
        <b-col sm="12" md="8" lg="8">
          <b-row>
            <p class="hi-text-normal">{{ talkTheme.description}}</p>
          </b-row>
          <b-row>
            <b-button variant="primary" class="mr-2">↑Good</b-button>
            <b-button variant="danger" class="mr-2">↓Bad</b-button>
            <b-button class="mr-2">共有</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

export default {
  name: 'TalkThemeDetailMainPanel',
  components: {
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
  }
}
</script>

<style lang="less">
</style>
