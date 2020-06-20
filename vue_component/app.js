// 全局变量
let data = {
  name: "米斯特okxu",
  hobby: "吃饭睡觉打66"
}

// 创建全局组件
Vue.component('Greeting', {
  // html模板
  template: `
    <p>
    这是全局组件，可以在任何实例的容器中使用
    我是:{{name}},我的爱好是:{{hobby}}
    <button @click="changeName">改名</button>
    </p>
  `,
  // 属性
  data () {
    return data
  },
  // 方法
  methods: {
    changeName() {
      this.name = 'Hello, 米斯特okxu'
    }
  }
})


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
    }
  },
  computed: {
    greet() {
    }
  },
  methods: {
    changeAppOne() {
    }
  }
})