// 实例化一个vue的对象
// 传递一个对象
new Vue({
  el: '#app',// el表示vue这个实例要操作哪个容器,只能在app这个div中使用
  //data本身是一个函数
  data() {
    return {
      name: 'mrokxu',
      age: 18
    }
  },
  methods: {
    // 写法一
    // greet: function () {
    //   return "Good night" +  this.name
    // },
    // 写法二 es6
    // greet() {
    //   return `Good night${this.name}`
    // },
    // 传参
    greet(time) {
      return `Good ${time} ${this.name}`
    },
    // 多个方法
    haveLunch() {
      return `吃过午饭了`
    }
  }
})