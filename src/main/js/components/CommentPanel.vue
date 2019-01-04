<template lang="html">
  <div id="commentPanel">
    <!-- コメント投稿フォーム -->
    <b-form inline>
      <b-form-input v-model="inputComment"
                    type="text"
                    placeholder="コメント"
                    size="md"
                    class="w-75" />
      <b-button @click="postComment"
                :disabled="isActiveCommentBtn"
                type="submit"
                variant="secondary"
                class="ml-2">コメント</b-button>
    </b-form>
    <!-- コメント表示エリア -->
    <ul v-for="comment in commentList" :key="comment.id">
      <comment :comment="comment"/>
    </ul>
  </div>
</template>

<script>
import CommentDto from '@/main/js/dto/CommentDto'
import Comment from '@/main/js/components/Comment.vue'
import DateUtil from '@/main/js/util/DateUtil'

export default {
  name: 'CommentPanel',
  components: {
    comment: Comment
  },
  data () {
    return {
      inputComment: ''
    }
  },
  props: {
    commentList: {
      type: Array,
      required: false
    }
  },
  methods: {
    postComment (e) {
      const userName = 'ゲスト'
      let maxId = 0
      this.commentList.forEach((comment) => {
        if (maxId < comment.id) {
          maxId = comment.id
        }
      })
      const newComment = new CommentDto(maxId + 1, userName, null, this.inputComment, DateUtil.now())
      // TODO: APIにてコメントをサーバーに登録。エラーの場合は画面にアラート表示
      this.commentList.push(newComment)
      this.inputComment = ''
    }
  },
  computed: {
    isActiveCommentBtn () {
      return this.inputComment.length === 0
    }
  }
}
</script>

<style lang="less">
</style>
