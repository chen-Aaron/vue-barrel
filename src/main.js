import Vue from 'vue'
import App from './App.vue'
import VueBarrel from './lib/index.js';

Vue.use(VueBarrel)

new Vue({
  el: '#app',
  render: h => h(App)
})
