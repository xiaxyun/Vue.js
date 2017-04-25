//字符
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    hello:'hello!!'
  }
})
//绑定v-bind
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '提示信息：页面加载于 ' + new Date()
  }
})
//v-if
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
//v-for
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
//事件监听器 v-on:click="click"
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//v-model
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

