import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "Task Store",
    tasks: [],
  }),

  actions: {
    async getTasks() {
      this.tasks = (await import("@/assets/data/products.json")).default;
    },
  },
});