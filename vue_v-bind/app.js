// 实例化一个vue的对象
// 传递一个对象
new Vue({
  el: '#app',
  data() {
    return {
      age: 10,
      x: 0,
      y: 0
    }
  },
  methods:{
    add (n) {
      this.age += n
    },
    subtract (n)　{
      this.age -= n
    },
    updateXY(event) {
      // console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    },
    logName() {
      console.log('正在输入name')
    },
    logAge() {
      console.log('正在输入age')
    }
  }
})