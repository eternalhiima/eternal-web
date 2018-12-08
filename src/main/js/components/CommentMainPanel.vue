<template lang="html">
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="12" md="9" lg="9">
          <b-form-input v-model="this.comment"
                        type="text"
                        placeholder="コメント"
                        class="mr-1"
                        style="width: 100%">
          </b-form-input>
        </b-col>
        <b-col sm="12" md="3" lg="3">
          <b-button variant="primary" style="width: 100%">コメントする</b-button>
        </b-col>
      </b-row>
      <comment-view-panel :commentList="this.commentList"></comment-view-panel>
    </b-container>
  </div>
</template>

<script>
import CommentDto from '@/main/js/dto/CommentDto'
import CommentViewPanel from '@/main/js/components/CommentViewPanel.vue'

export default {
  name: 'CommentPanel',
  components: {
    commentDto: CommentDto,
    commentViewPanel: CommentViewPanel
  },
  data () {
    return {
      comment: '',
      commentList: []
    }
  },
  mounted () {
    const commentDto1 = new CommentDto(1, '大友康弘', 'user_profile_sample.jpg', '楽しかった！', '201811111200')
    const commentDto2 = new CommentDto(2, '大友康弘', 'user_profile_sample.jpg', 'つまらなかった！', '201811111500')
    this.commentList.push(commentDto1)
    this.commentList.push(commentDto2)
  }
}
</script>

<style lang="less">
</style>
