const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    subtract() {
      this.counter = this.counter - 1;
    },
    add() {
      this.counter = this.counter + 1;
    },
  },
});

app.mount("#events");
