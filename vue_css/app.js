new Vue({
  el: '#app',
  data() {
    return {
      mr_change_color: false,
      change_font_size: false
    }
  },
  computed: {
    setChangeColor() {
      return {
        changeColor: this.mr_change_color,
        changeFontSize: this.mr_change_color
      }
    }
  }
})