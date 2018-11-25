<template lang="html">
  <div id="trendsArea">
    <svg :width="width" :height="height" :viewBox="viewBox" class="bg-light">
      <trend-item v-for="trendItem in trendItemList"
                  :key="trendItem.id"
                  :trendData="trendItem"
                  :canvasWidth="width"
                  :canvasHeight="height" />

    </svg>
  </div>
</template>

<script>
import TrendItem from '@/main/js/components/TrendItem.vue'

export default {
  name: 'trends-area',
  components: {
    trendItem: TrendItem
  },
  data () {
    return {
    }
  },
  props: {
    trendItemList: {
      type: Array,
      required: true
    }
  },
  computed: {
    width () {
      return innerWidth
    },
    height () {
      // headerの高さをひく
      return innerHeight - 64
    },
    viewBox () {
      return `0 0 ${this.width} ${this.height}`
    }
  }
}
</script>

<style lang="less" scoped>
.canvas {

}
</style>
