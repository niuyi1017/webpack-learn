import Vue from "vue"

var app = new Vue({
  el: '#app',
  template: '<div>{{ message }}</div>',
  data: {
    message: 'Hello Vue!'
  }
})