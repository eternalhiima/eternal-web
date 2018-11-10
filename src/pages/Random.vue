<template lang="html">
  <div id="Random">
    <global-header></global-header>

    <!-- genre select box -->
    <b-form-select id="genreInput3"
                   :options="genre"
                   required
                   v-model="form.food">
    </b-form-select>

    <!-- talk level -->
    <p>Value: {{ text1 }}</p>

    <!-- range -->
    <b-form-input id="levelInput3"
                  v-model="text1"
                  type="range"
                  placeholder="Enter your name"></b-form-input>
    <!-- talk button -->
    <b-button size="lg" variant="primary">
      Let's talk
    </b-button>

  </div>
</template>

<script>
  import GlobalHeader from '../components/Header.vue'

  export default {
    data() {
      return {
        form: {
          food: null
        },
        genre: [
          {text: 'Select a genre', value: null},
          'life', 'love', 'work', 'other'
        ],
        text1: '50'
      }
    },
    name: 'Random',
    components: {
      globalHeader: GlobalHeader
    }
  }
</script>

<style lang="less">
</style>
