<template lang="html">
  <div id="header">
  <b-navbar class="global-navbar" toggleable="md" type="light" variant="light">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand to="/" tag="h1">
    <img class="logo" src="@/resources/static/images/logo.png" alt="hiima" />
  </b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item to="/random">RANDOM</b-nav-item>
      <b-nav-item to="/ranking">RANKING</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

<!-- TODO:検索フォームの実装 -->
      <b-nav-form v-on:submit.prevent="toSearchResult">
        <b-form-input v-model="searchWord" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

<!-- User情報表示用の項目ユーザー情報を管理可能となるPhase2以降に使用する -->
      <!-- <b-nav-item-dropdown right> -->
        <!-- Using button-content slot -->
        <!-- <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</div>
</template>

<script>
export default {
  name: 'global-header',
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    toSearchResult () {
      alert(this.searchWord)
      // TODO::toにparamを追加する {name: 'searchResult', params: {xxx: xxx}}
      // this.$router.push({name: 'SearchResult'})
    }
  }
}
</script>

<style lang="less">
.global-navbar {
  height: 64px;
}
.logo {
  width: 68px;
  height: 68px;
}

</style>
