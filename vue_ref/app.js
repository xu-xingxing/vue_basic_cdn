new Vue({
  el: '#app',
  data() {
    return {
      name: '',
      age: 32
    }
  },
  methods: {
    getName() {
      console.log(this.$refs.name.value)
    },
    getAge() {
      console.log(this.$refs.age.value)
    }
  }
})