// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import router from './router'

import * as $http from './requests'
Vue.prototype.$http = $http
Vue.config.productionTip = false

Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
