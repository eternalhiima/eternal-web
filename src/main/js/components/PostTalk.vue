<template lang="html">
  <div id="postTalk">
    <fab :bg-color="bgMainColor"
         :actions="fabActions"
         @showPostTalk="showPostTalkModal">
    </fab>
    <!-- トークテーマ投稿モーダルウィンドウ -->
    <b-modal ref="postTalkModal" @shown="focusTitleInput" hide-footer centered title="トークテーマを投稿">
      <div>
        <b-form @submit="onSubmit" :novalidate="true">
          <b-form-group>
            <b-form-row class="mb-3">
              <b-form-input id="title"
                        v-model.trim="form.title"
                        :state="validateState.isTitleValid"
                        aria-describedby="titleInvalidFeedback"
                        ref="titleInput"
                        type="text"
                        size="sm"
                        required
                        placeholder="トークテーマのタイトル">
              </b-form-input>
              <b-form-invalid-feedback id="titleInvalidFeedback">
                タイトルを30文字以内で入力して下さい
              </b-form-invalid-feedback>
            </b-form-row>
            <b-container fluid class="m-0 p-0">
              <b-row align-h="start" class="mx-0 px-0 mb-1">
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
                  <category-tag :name="category"
                                :showDeleteBtn="true"
                                @deleteTag="deleteCategoryTag"/>
                </b-col>
              </b-row>
            </b-container>
            <b-form-row class="mb-3">
              <b-form-textarea id="description"
                               v-model.trim="form.description"
                               :state="validateState.isDescriptionValid"
                               aria-describedby="descriptionInvalidFeedback"
                               placeholder="トークテーマの説明"
                               :rows="4"
                               :max-rows="8">
              </b-form-textarea>
              <b-form-invalid-feedback id="descriptionInvalidFeedback">
                説明を500文字以内で入力して下さい
              </b-form-invalid-feedback>
            </b-form-row>
            <b-form-row class="mb-3">
              <b-form-input id="userName"
                        v-model.trim="form.userName"
                        :state="validateState.isUserNameValid"
                        aria-describedby="userNameInvalidFeedback"
                        type="text"
                        size="sm"
                        required
                        placeholder="ユーザー名">
              </b-form-input>
              <b-form-invalid-feedback id="userNameInvalidFeedback">
                ユーザー名を10文字以内で入力して下さい
              </b-form-invalid-feedback>
            </b-form-row>
            <b-form-row class="mb-3">
              <b-form-input id="relatedUrl"
                        v-model.trim="form.relatedLink"
                        type="url"
                        size="sm"
                        placeholder="トークテーマに関連するリンク">
              </b-form-input>
              <b-form-text>
                YouTubeやWikiPediaなどのリンクを入力してください
              </b-form-text>
            </b-form-row>
            <div class="text-center">
              <b-button type="submit" variant="primary"> 投稿 </b-button>
            </div>
          </b-form-group>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import fab from 'vue-fab'
import IncrementalSearch from '@/main/js/components/IncrementalSearch.vue'
import CategoryTag from '@/main/js/components/CategoryTag.vue'
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
    incrementalSearch: IncrementalSearch,
    categoryTag: CategoryTag
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
      form: {
        title: '',
        categoryInput: '',
        categoryTagList: [],
        description: '',
        userName: '',
        relatedLink: ''
      },
      validateState: {
        isTitleValid: null,
        isDescriptionValid: null,
        isUserNameValid: null
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
        // すでに登録されているタグは追加しない
        this.form.categoryTagList.push(this.categoryInput)
      }
      // カテゴリ入力欄の初期化
      this.form.categoryInput = ''
    },
    deleteCategoryTag (value) {
      const deleteIndex = this.form.categoryTagList.indexOf(value)
      if (deleteIndex !== -1) {
        this.form.categoryTagList.pop(deleteIndex)
      }
    },
    onSubmit (e) {
      e.preventDefault()
      // 入力欄のバリデーション
      this.validateState.isTitleValid = this.form.title.length !== 0 && this.form.title.length <= 30
      this.validateState.isDescriptionValid = this.form.description.length !== 0 && this.form.description.length <= 500
      this.validateState.isUserNameValid = this.form.userName.length !== 0 && this.form.userName.length <= 10
      if (this.validateState.isTitleValid && this.validateState.isDescriptionValid && this.validateState.isUserNameValid) {
        // TODO: talkThemeDtoに変換してapiに渡す
        alert(JSON.stringify(this.form))
      }
    }
  }
}
</script>

<style lang="less" scoped>
/** vue-fab用のcss */
@import (css) "https://fonts.googleapis.com/icon?family=Material+Icons";
@import (css) "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
