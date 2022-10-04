import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'

global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
