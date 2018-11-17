<template lang="html">
  <div id="postTalk">
    <fab :bg-color="bgMainColor"
         :actions="fabActions"
         @showPostTalk="showPostTalkModal">
    </fab>
    <!-- トークテーマ投稿モーダルウィンドウ -->
    <b-modal ref="postTalkModal" @shown="focusTitleInput" hide-footer centered title="トークテーマを投稿">
      <div class="d-block text-center">
        <b-form @submit="onSubmit">
          <b-form-group>
            <b-form-input id="title"
                      v-model="form.title"
                      ref="titleInput"
                      type="text"
                      size="sm"
                      required
                      placeholder="トークテーマのタイトル"
                      class="mb-3">
            </b-form-input>
            <!-- TODO:インクリメンタルサーチコンポーネントに変更 -->
            <b-form-select id="category"
                           v-model="form.category"
                           :options="categoryList"
                           :select-size="1"
                           size="sm">
            </b-form-select>
            <b-badge pill variant="light" class="mr-1 mb-3 text-muted" >
              <font-awesome-icon icon="tag" class="tag"/> {{ form.category }}
            </b-badge>
            <b-form-textarea id="description"
                             v-model="form.description"
                             placeholder="トークテーマの説明"
                             :rows="4"
                             :max-rows="8"
                             class="mb-3">
            </b-form-textarea>
            <b-form-input id="userName"
                      v-model="form.postedUser"
                      type="text"
                      size="sm"
                      required
                      placeholder="ユーザー名"
                      class="mb-3">
            </b-form-input>
            <b-form-input id="title"
                      v-model="form.relatedLink"
                      type="url"
                      size="sm"
                      placeholder="トークテーマに関連するリンク">
            </b-form-input>
            <b-form-text class="mb-3 text-left">
              YouTubeやWikiPediaなどのリンクを入力してください。
            </b-form-text>
            <b-button type="submit" variant="primary"> 投稿 </b-button>
          </b-form-group>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import fab from 'vue-fab'

export default {
  name: 'post-talk-btn',
  components: {
    fab
  },
  data () {
    return {
      bgMainColor: '#007bff',
      fabActions: [{
        name: 'showPostTalk',
        icon: 'edit',
        tooltip: 'トークテーマ投稿',
        color: '#343a40'
      }],
      // TODO: 相関バリデーションの実装
      form: {
        title: '',
        category: [],
        description: '',
        postedUser: '',
        relatedLink: ''
      },
      // TODO:カテゴリのリストはRef003_トークテーマジャンル一覧取得より取得
      categoryList: ['カテゴリ1', 'カテゴリ2', 'カテゴリ3', 'カテゴリ4', 'カテゴリ5', 'カテゴリ6']
    }
  },
  methods: {
    showPostTalkModal () {
      this.$refs.postTalkModal.show()
    },
    focusTitleInput (e) {
      this.$refs.titleInput.focus()
    },
    onSubmit (e) {
      // talkThemeDtoに変換してapiに渡す
      alert(JSON.stringify(this.form))
    }
  }
}
</script>

<style lang="less" scoped>
@import (css) "https://fonts.googleapis.com/icon?family=Material+Icons";
@import (css) "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
