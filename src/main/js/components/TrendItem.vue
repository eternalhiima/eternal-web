<template lang="html">
  <g class="trendItem">
    <circle :cx="cx"
            :cy="cy"
            :r="calcItemRadius()"
            @click="onClickItem"
            class="trendCircle"></circle>
    <text :x="cx"
          :y="cy"
          @click="onClickItem"
          text-anchor="middle"
          dominant-baseline="central"
          class="trendText">
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
    this.cy = this.canvasHeight * Math.random()
    // 0.01msごとに座標を動かす
    this.timer = setInterval(() => {
      if (this.cx + this.calcItemRadius() < 0) {
        this.cx = this.canvasWidth + this.calcItemRadius()
      } else if (this.cx - this.calcItemRadius() > this.canvasWidth) {
        this.cx = -this.calcItemRadius()
      } else {
        this.cx += Math.round(Math.random()) === 1
          ? Math.random() * 0.2 : Math.random() * -0.1
      }
      if (this.cy + this.calcItemRadius() < 0) {
        // 画面の上に見切れたら下から再表示
        this.cy = this.canvasHeight + this.calcItemRadius()
      } else {
        this.cy -= Math.random() * 0.1
      }
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
      if (this.canvasWidth >= 992) {
        // トレンドの順位によってアイテムのサイズを変更する
        switch (this.trendData.order) {
          case 1:
            return 105
          case 2:
          case 3:
            return 90
          default :
            return 75
        }
      } else {
        switch (this.trendData.order) {
          case 1:
            return 90
          case 2:
          case 3:
            return 75
          default :
            return 60
        }
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
// TODO: 全体でimportしているのでここからimportを削除
@import "./../../../resources/static/less/base";
.trendItem {
  cursor: pointer;
  .trendCircle {
    fill: #03a9f4;
    opacity: 0.8;
  }
  .trendText {
    fill: #fff;
    @media @app, @tab {
      font-size: 0.8rem;
    }
    @media @pc {
      font-size: 1rem;
    }
  }
}
.trendCircle:hover {
  opacity: 0.7;
}
</style>
