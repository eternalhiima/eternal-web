<template lang="html">
  <div id="Random">
    <global-header></global-header>

    <!-- genre select box -->
    <div id="genreSelect"
         class="text-center">
      <b-form-select id="genreInput"
                     class="w-50 m-3"
                     :options="genre"
                     required
                     v-model="form.food"
                     v-b-tooltip.hover title="select a genre!">
      </b-form-select>
    </div>

    <!-- talk level -->
    <div id="talkLevel"
         class="text-center">
      <p class="m-3">
        Level: {{ text1 }}
      </p>
    </div>

    <!-- range -->
    <b-form-input id="levelInput3"
                  class="w-50 mx-auto"
                  v-model="text1"
                  type="range"
                  placeholder="Enter your name"
                  v-b-tooltip.hover title="select level!">

    </b-form-input>

    <!-- talk button -->
    <div id="talkButton"
         class="text-center">
      <b-button size="lg"
                class="m-3"
                variant="primary"
                v-b-tooltip.hover title="Start talking!">
        Let's talk
      </b-button>
    </div>

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
  /* temp css */
</style>
