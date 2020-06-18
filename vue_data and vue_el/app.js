// 实例化一个vue的对象
// 传递一个对象
new Vue({
  el: '#app',// el表示vue这个实例要操作哪个容器,只能在app这个div中使用
  data() {
    return {
      name: 'mrokxu',
      age: 18
    }
  }
  //data本身是一个函数
})