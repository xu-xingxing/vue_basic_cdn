new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      age: ''
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    age(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
})