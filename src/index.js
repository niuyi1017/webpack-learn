import Vue from "vue"
import './index.styl'

var app = new Vue({
  el: '#app',
  template: '<div>{{ message }}</div>',
  data: {
    message: 'Hello Vue!'
  }
})
