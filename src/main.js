// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Framework7Vue from 'framework7-vue'
// Import framework with all components
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
import Framework7 from 'framework7'

// import components for root
// import { f7view, f7StatusBar } from 'framework7-vue'
import 'framework7/dist/css/framework7.min.css'

// import pages
import homePage from './pages/HomePage'

import routes from './routes'

Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // @ts-ignore
  framework7: {
    routes,
    theme: 'ios',
    name: 'My App',
    id: 'com.myapp.test'
  }
})
