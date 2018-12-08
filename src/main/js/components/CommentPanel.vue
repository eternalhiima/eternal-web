<template lang="html">
  <div>
    <b-row>
      <b-col sm="1" md="1" lg="1">
        <b-img-lazy :src="imgSrc" rounded left blank blank-color="#777" width="90" height="90" alt="ProfileImg"></b-img-lazy>
      </b-col>
      <b-col sm="10" md="10" lg="10">
        <b-row>
          <span class="mr-2">{{ this.comment.userName }}</span>
          <span class="mr-2 text-muted">{{ parseDateTime(comment.commentedDateTime) }}</span>
        </b-row>
        <b-row>
          <p>コメント</p>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommentDto from '@/main/js/dto/CommentDto'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'CommentPanel',
  components: {
    commentDto: CommentDto
  },
  data () {
    return {
      imgSrc: require(`@/resources/static/images/${this.comment.profileImgUrl}`)
    }
  },
  props: {
    comment: {
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
