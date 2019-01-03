// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// bootstrap-vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
// fas
import { faTag, faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
// fab
import { faTwitter, faFacebook, faInstagram, faLine } from '@fortawesome/free-brands-svg-icons'
// far
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)

library.add(faTag, faUserCircle, faThumbsUp, faThumbsDown, faCopy, faTwitter, faFacebook, faInstagram, faLine)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// routing config
router.beforeEach((to, from, next) => {
  let metaTitle = 'hiima'
  // set title
  if (to.meta.title) {
    metaTitle = to.meta.title
  }
  document.title = metaTitle
  next()
})
