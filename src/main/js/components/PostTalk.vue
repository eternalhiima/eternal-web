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
            <!-- TODO:エラーメッセージを表示する欄を作る -->
            <b-form-input id="title"
                      v-model="form.title"
                      ref="titleInput"
                      type="text"
                      size="sm"
                      required
                      placeholder="トークテーマのタイトル"
                      class="mb-3">
            </b-form-input>
            <b-container fluid class="m-0 p-0">
              <b-row align-h="start" class="mx-0 px-0">
                <b-col :md="7" class="p-0">
                  <incremental-search :placeholder="'カテゴリを選択'"
                                      :suggestData="categoryList"
                                      @onChangeInput="changeCategoryInput"/>
                </b-col>
                <b-col :md="2">
                  <b-button size="sm" @click="addCategoryTag">追加</b-button>
                </b-col>
              </b-row>
              <b-row class="mb-3">
                <b-col :md="3" align-self="start" v-for="category in form.categoryTagList" :key="category">
                  <!-- TODO: タグをコンポーネントにし、×ボタンで消えるようにする -->
                  <b-badge pill variant="light" class="text-muted align-right">
                    <font-awesome-icon icon="tag" class="tag"/> {{ category }}
                  </b-badge>
                </b-col>
              </b-row>
            </b-container>
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
import IncrementalSearch from '@/main/js/components/IncrementalSearch.vue'
import CategoryDto from '@/main/js/dto/CategoryDto.js'

// テストデータ
const categoryDto1 = new CategoryDto(1, 'hoge')
const categoryDto2 = new CategoryDto(2, 'fuga')
const categoryDto3 = new CategoryDto(3, 'hoge2')
const categoryDto4 = new CategoryDto(4, 'hogefuga4')
const categoryDto5 = new CategoryDto(5, 'トーク1')
const categoryDto6 = new CategoryDto(6, 'カテゴリ2')

export default {
  name: 'post-talk',
  components: {
    fab,
    incrementalSearch: IncrementalSearch
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
        categoryInput: '',
        categoryTagList: [],
        description: '',
        postedUser: '',
        relatedLink: ''
      },
      // TODO:カテゴリのリストはRef003_トークテーマジャンル一覧取得より取得
      categoryList: [categoryDto1, categoryDto2, categoryDto3, categoryDto4, categoryDto5, categoryDto6]
    }
  },
  methods: {
    showPostTalkModal () {
      this.$refs.postTalkModal.show()
    },
    focusTitleInput (e) {
      this.$refs.titleInput.focus()
    },
    // カテゴリ入力タグのデータを取得
    changeCategoryInput (value) {
      this.categoryInput = value
    },
    addCategoryTag () {
      if (this.form.categoryTagList.length >= 4) {
        // error
        return
      }
      if (this.form.categoryTagList.indexOf(this.categoryInput) === -1) {
        this.form.categoryTagList.push(this.categoryInput)
      }
      // カテゴリ入力欄の初期化
      this.form.categoryInput = ''
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
