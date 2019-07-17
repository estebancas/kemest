import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store/store'
import router from '@/router'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faComment,
  faHeart,
  faBars,
  faChevronDown,
  faTimes
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import './assets/css/main.css'

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
