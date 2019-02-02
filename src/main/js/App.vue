<template>
  <div id="app">
    <global-header />
    <router-view class="body"/>
    <post-talk/>
  </div>
</template>

<script>
import GlobalHeader from '@/main/js/components/Header.vue'
import PostTalk from '@/main/js/components/PostTalk.vue'

export default {
  name: 'App',
  components: {
    globalHeader: GlobalHeader,
    postTalk: PostTalk
  }
}
</script>

<style lang="less">
/** 共通Lessのインポート */
@import "./../../resources/static/less/base";
.body {
  padding-top: 64px;
}
</style>
