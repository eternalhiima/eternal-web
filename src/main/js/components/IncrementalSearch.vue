<template lang="html">
  <div id="incrementalSearch" class="m-0 p-0">
    <input type="search"
           v-model.trim="input"
           @blur="inputData"
           @change="inputData"
           :placeholder="placeholder"
           :disabled="disabled"
           :required="required"
           list="suggestList"
           class="inputArea">
    <datalist id="suggestList">
      <option v-for="data in filteredDataList"
              :key="data.id"
              :value="data.name">
      </option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'incremental-search',
  data () {
    return {
      input: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    required: {
      type: Boolean,
      default: false,
      required: false
    },
    suggestData: {
      type: Array,
      default: null,
      required: false
    },
    maxListCount: {
      type: Number,
      default: 5,
      required: false
    }
  },
  methods: {
    inputData (e) {
      e.preventDefault()
      this.$emit('onChangeInput', this.input)
    }
  },
  computed: {
    filteredDataList () {
      // 入力に応じてのインクリメンタルサーチ
      const self = this
      const filteredData = self.suggestData.filter((data) => data.name.indexOf(self.input) !== -1)
      // 最大値チェック
      if (filteredData.length > this.maxListCount) {
        return filteredData.slice(0, this.maxListCount)
      }
      return filteredData
    }
  }
}
</script>

<style lang="less" scoped>
.inputArea {
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-family: inherit;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
  display: block;
  overflow: visible;
  box-sizing: border-box;
}
</style>
