<template lang="html">
  <div id="snsShareBtn">
    <b-button @click="showSnsShareModal" :variant="variant" :size="size">
      {{ displayName }}
    </b-button>
    <!-- SNS共有モーダル -->
    <b-modal ref="snsShareModal" hide-footer centered title="リンクの共有">
      <div>
        <div class="d-flex justify-content-center mb-2 p-2">
          <font-awesome-icon :icon="['fab', 'twitter']"
                             @click="onShare('twitter')"
                             class="twitterIcon" />
          <font-awesome-icon :icon="['fab', 'facebook']"
                             @click="onShare('facebook')"
                             class="fbIcon" />
          <font-awesome-icon :icon="['fab', 'instagram']"
                             @click="onShare('instagram')"
                             class="instaIcon" />
          <font-awesome-icon :icon="['fab', 'line']"
                             @click="onShare('line')"
                            class="LineIcon" />
        </div>
        <b-form inline class="m-2">
          <b-form-input id="shareUrlInput"
                        v-model="currentUrl"
                        :readonly="true"
                        type="url"
                        size="sm"
                        class="w-75" />
          <b-button @click="copyLink"
                    variant="outline-secondary"
                    size="sm">
            <font-awesome-icon :icon="['far', 'copy']" />
          </b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import LinkPageType from '@/main/js/type/LinkPageType'

export default {
  name: 'sns-share-btn',
  data () {
    return {
      currentUrl: location.href
    }
  },
  props: {
    displayName: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: 'outline-secondary'
    },
    size: {
      type: String,
      required: false,
      default: 'md'
    }
  },
  methods: {
    showSnsShareModal () {
      this.$refs.snsShareModal.show()
    },
    onShare (snsBrand) {
      // TODO: currentUrlを遷移先のパラメータに渡せるようにする。
      // 各サイトのAPIを確認する？
      window.open(LinkPageType.getUrl(LinkPageType.get(snsBrand)))
    },
    copyLink () {
      const target = document.getElementById('shareUrlInput')
      target.select()
      document.execCommand('copy')
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../../../resources/static/less/base";

.twitterIcon {
  .shareIcon;
  background-color: @twitter-brand-color;
}
.fbIcon {
  .shareIcon;
  background-color: @fb-brand-color;
}
.instaIcon {
  .shareIcon;
  background-color: @insta-brand-color;
}
.LineIcon {
  .shareIcon;
  background-color: @line-brand-color;
}
.shareIcon {
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  margin: auto;
  @media @pc, @tab {
    width: 72px;
    height: 72px;
    padding: 16px;
    font-size: 1.6rem;
    line-height: 32px;
  }
  @media @app {
    width: 64px;
    height: 64px;
    padding: 12px;
    font-size: 1rem;
    line-height: 40px;
  }
}
</style>
