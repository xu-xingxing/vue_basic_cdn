new Vue({
  el: "#app",
  data() {
    return {
      todos: [],
      todo: {
        completed: false,
        title: ''
      }
    }
  },
  mounted() {
    // fetch api 请求接口
    // const todos = fetch("http://jsonplaceholder.typicode.com/todos").then(
    //   res => {
    //     // console.log(res)
    //     // 解析fetch请求
    //     // console.log(res.json())
    //     return res.json()
    //   }
    // ).then(todos => {
    //   this.todos = todos
    // })

    //axios api 请求接口
    axios.get('http://jsonplaceholder.typicode.com/todos').then(
      res => {
        this.todos = res.data
      }
    )
    
  },
  methods: {
    // fetch post请求
    onSubmit() {
    //   fetch("http://jsonplaceholder.typicode.com/todos", {
    //     method: 'POST',
    //     body: JSON.stringify(this.todo),
    //     headers: {
    //       'Content-Type':'application/json'
    //     }
    //   }).then(res => {
    //     return res.json()
    //   }).then(todo => {
    //     console.log(todo)
    //     this.todos.unshift(todo)
    //   })

    // axios post请求
    axios.post("http://jsonplaceholder.typicode.com/todos", this.todo).then(
      res => {
        console.log(res.data)
        this.todos.unshift(res.data)
      }
    )
    }
  }
})