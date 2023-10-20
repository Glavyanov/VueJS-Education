import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 3,
    name: 'Increase',
    upperBoard: 9,
  }),

  getters: {
    oddOrEven(state) {
      return state.count % 2 !== 1 ? "even" : "odd";
    },
  },

  actions: {
    doubleCount() {
      this.count = this.count * 2;
    },
    increment() {
      ++this.count;
      this.count > this.upperBoard ? this.doubleCount() : null;
    },
    decrement() {
      this.count && this.count--;
    },
  },
});
