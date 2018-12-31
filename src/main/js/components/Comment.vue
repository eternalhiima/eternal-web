<template lang="html">
  <div id="comment">
    <b-container fluid>
      <b-row class="mt-3">
        <b-col sm="2" md="2" lg="2">
          <b-img-lazy v-if="this.comment.profileImgUrl !== null" :src="imgSrc" rounded="circle" left blank blank-color="#777" width="60" height="60" alt="ProfileImg" />
          <font-awesome-icon v-else icon="user-circle" class="userIcon"/>
        </b-col>
        <b-col sm="10" md="10" lg="10">
          <b-row>
            <p class="mr-4 hi-text-light">{{ this.comment.userName }}</p>
            <p class="hi-text-light">{{ parseDateTime(comment.commentedDateTime) }}</p>
          </b-row>
          <b-row>
            <p class="hi-text-normal">{{ this.comment.comment }}</p>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CommentDto from '@/main/js/dto/CommentDto'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'Comment',
  data () {
    return {
      imgSrc: require(`@/resources/static/images/${this.comment.profileImgUrl}`)
    }
  },
  props: {
    comment: {
      type: CommentDto,
      required: true
    }
  },
  methods: {
    parseDateTime: (dateTime) => DateUtil.parseDateTimeForDisplay(dateTime)
  }
}
</script>

<style lang="less">
.userIcon {
  font-size: 60px;
  color: #777;
}
</style>
