const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate(){
    console.log('Before Create');
  },
  created(){
    console.log('Created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUnmount(){
    console.log('before unmount');
  },
  unmounted(){
    console.log('unmount');
  }
});

app.mount("#app");

setTimeout(() => {
  app.unmount();

}, 3000);

const app2 = Vue.createApp({
  template: `
  <h2>How Vue Works App2</h2>
  <input type="text" @input="saveInput">
  <button @click="setText">Set Text</button>
  <p>Favourite Item: {{ favouriteItem }}</p>
  <p>{{ message }}</p>
  `,
  data() {
    return {
      favouriteItem: "Key",
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.currentUserInput;
    },
  },
});

app2.mount("#app2");
