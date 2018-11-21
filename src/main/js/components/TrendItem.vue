<template lang="html">
  <g>
    <!-- <defs>
      <linearGradient id="gradation">
        <stop class="stop1" offset="0%"/>
        <stop class="stop2" offset="100%"/>
      </linearGradient>
    </defs> -->
    <circle :cx="cx"
            :cy="cy"
            :r="calcItemRadius()"
            @click="onClickItem"
            class="trendItem"></circle>
    <text :x="cx"
          :y="cy"
          @click="onClickItem"
          text-anchor="middle"
          dominant-baseline="central">
      {{ trendData.title}}
    </text>
  </g>
</template>

<script>
import TalkThemeDto from '@/main/js/dto/TalkThemeDto'

export default {
  name: 'trend-item',
  data () {
    return {
      timer: undefined,
      cx: 0,
      cy: 0
    }
  },
  mounted () {
    // cxとcyを初期化する
    this.cx = this.canvasWidth * Math.random()
    this.cy = this.canvasHeight - (Math.random() * 300)
    this.timer = setInterval(() => {
      if (Math.round(Math.random()) === 1) {
        this.cx += Math.random() * 0.2
      } else {
        this.cx -= Math.random() * 0.1
      }
      this.cy -= Math.random() * 0.1
    }, 0.01)
  },
  props: {
    trendData: {
      type: TalkThemeDto,
      required: true
    },
    canvasWidth: {
      type: Number,
      required: true
    },
    canvasHeight: {
      type: Number,
      required: true
    }
  },
  methods: {
    calcItemRadius () {
      // トレンドの順位によってサイズを変更する
      switch (this.trendData.order) {
        case 1:
          return 105
        case 2:
        case 3:
          return 90
        default :
          return 75
      }
    },
    onClickItem (e) {
      e.preventDefault()
      // トレンドをクリックしたら、トークテーマ詳細ページへ遷移する
      this.$router.push({name: 'TalkThemeDetail', params: {talkThemeId: this.trendData.id}})
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
// insta カラー
.trendItem {
  fill: #03a9f4;
}
// TODO: インスタカラー
// .trendItem {
//   display: block;
//   fill: -webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
//   background: linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;/*グラデーション①*/
//   overflow: hidden;/*はみ出た部分を隠す*/
// }
//
// .trendItem:before{/*グラデーション②*/
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;/*全体を覆う*/
//   height: 100%;/*全体を覆う*/
//   background: -webkit-linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat;
//   background: linear-gradient(15deg, #ffdb2c, rgb(249, 118, 76) 25%, rgba(255, 77, 64, 0) 50%) no-repeat;
// }

</style>
