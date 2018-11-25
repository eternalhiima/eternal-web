<template lang="html">
  <div id="categoryTag">
    <b-badge pill variant="light" class="text-muted align-right">
      <font-awesome-icon icon="tag" class="tag"/> {{ this.name }}
      <button type="button"
              v-if="showDeleteBtn"
              @click="deleteTag"
              class="close-btn">
              ×</button>
    </b-badge>
  </div>
</template>

<script>
export default {
  name: 'category-tag',
  data () {
    return {

    }
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    showDeleteBtn: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    deleteTag (e) {
      e.preventDefault()
      this.$emit('deleteTag', this.name)
    }
  }
}
</script>

<style lang="less" scoped>
.close-btn {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  float: light;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}
</style>
