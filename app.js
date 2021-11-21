const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  computed: {
    fullname() {
      console.log('Running again..')
      if (this.name === '') {
        return ''
      }
      return this.name + ' ' + 'Pineda'
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    subtract(num) {
      this.counter = this.counter - num
    },
    setName(event) {
      this.name = event.target.value
    },
    resetInput() {
      this.name = ''
    },
  },
})

app.mount('#events')
