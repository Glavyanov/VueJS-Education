const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: "",
    };
  },
  computed: {
    personMax() {
      return { name: "Max", age: 31 };
    },
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
