const one = new Vue({
  el: '#vue-app-one',
  data() {
    return {
      title: 'this is app one'
    }
  },
  computed: {
    greet() {
      return 'Hello mrokxu'
    }
  }
})

const two = new Vue({
  el: '#vue-app-two',
  data() {
    return {
      title: 'this is app two'
    }
  },
  computed: {
    greet() {
      return 'Hello mrokxu'
    }
  },
  methods: {
    changeAppOne() {
      one.title = 'this is title of app one'
    }
  }
})

two.title = "this is title of app two"