<template lang="html">
  <div>
      <div v-for="comment in this.commentList" :key="comment.id">
        <comment-panel :comment="comment" class="mt-1"></comment-panel>
      </div>
  </div>
</template>

<script>
import CommentDto from '@/main/js/dto/CommentDto'
import CommentPanel from '@/main/js/components/CommentPanel.vue'

export default {
  name: 'CommentPanel',
  components: {
    commentDto: CommentDto,
    commentPanel: CommentPanel
  },
  data () {
    return {
    }
  },
  props: {
    commentList: {
      required: false
    }
  },
  methods: {
    // profileImgUrl: (comment) =>
  }
}
</script>

<style lang="less">
</style>
