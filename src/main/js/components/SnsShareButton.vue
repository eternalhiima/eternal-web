<template lang="html">
  <div id="snsShareBtn">
    <b-button @click="showSnsShareModal" :variant="variant" :size="size">
      {{ displayName }}
    </b-button>
    <b-modal ref="snsShareModal" hide-footer centered title="リンクの共有">
      <div>
        <div class="d-flex justify-content-center mb-2 p-2">
          <font-awesome-icon :icon="['fab', 'twitter']" class="twitterIcon" />
          <font-awesome-icon :icon="['fab', 'facebook']" class="fbIcon" />
          <font-awesome-icon :icon="['fab', 'instagram']" class="instaIcon" />
          <font-awesome-icon :icon="['fab', 'line']" class="LineIcon" />
        </div>
        <!-- URLが表示され、横のアイコンをクリックするとコピーできる
             ref.) githubのリンクコピー -->
        <b-form inline class="m-2">
          <b-form-input id="shareUrlInput"
                        v-model="shareUrl"
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
export default {
  name: 'sns-share-btn',
  data () {
    return {
      shareUrl: location.href
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
  background-color: #55acee;
}
.fbIcon {
  .shareIcon;
  background-color: #315096;
}
.instaIcon {
  .shareIcon;
  background-color: #CF2E92;
}
.LineIcon {
  .shareIcon;
  background-color: #00B900;
}
.shareIcon {
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  @media @pc {
    width: 72px;
    height: 72px;
    margin: auto;
    padding: 16px;
    font-size: 1.6rem;
    line-height: 32px;
  }
}
</style>
