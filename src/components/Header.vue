<template lang="html">
  <div id="header">
  <b-navbar toggleable="md" type="dark" variant="primary">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
<router-link to="/" class="text-light nav-item">
  <b-navbar-brand class="logo" tag="h1">hiima</b-navbar-brand>
</router-link>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item>
        <router-link to="/ranking" class="text-light nav-item">RANKING</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/random" class="text-light nav-item">RANDOM</router-link>
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

<!-- TODO:検索フォームの実装 -->
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
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
  name: 'global-header'
}
</script>

<style lang="less">
// TODO:デザインがいけてないから修正する。infoの青色うざい。。
@font-face {
  font-family: 'logo';
  font-style: normal;
  font-weight: 600;
  src :url('../../static/fonts/GamjaFlower-Regular.ttf');
}
.logo {
  font-family: 'logo';
  font-size: 2.5rem;
  padding: none;
}
.nav-item:hover {
  text-decoration: none;
}
</style>
