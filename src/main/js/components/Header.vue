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
          <b-nav-form @submit="toSearchResult">
            <b-form-input v-model="keyword" size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
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
      keyword: ''
    }
  },
  methods: {
    toSearchResult () {
      this.$router.push({name: 'SearchResult', params: {keyword: this.keyword}})
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
