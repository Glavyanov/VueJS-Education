const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmHandler(event) {
      this.confirmedName = this.name;
      event.target.value = "";
    },
    submitForm(event) {
      alert(`Submit for ${this.confirmedName} is Ok!`);
      event.target.querySelector("input").value = "";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + (num ? num : 1);
    },
    reduce(num) {
      this.counter = this.counter - (num ? num : 1);
      // this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
