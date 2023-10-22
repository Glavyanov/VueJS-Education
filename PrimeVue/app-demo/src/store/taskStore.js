import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "Task Store",
    tasks: [],
    showAll: false,
    label: "All",
    title: "Favourite"
  }),

  getters: {
    getTitle(){
        return this.title;
    },
    getLabel(){
        return this.label;
    }
  },

  actions: {
    async getTasks() {
      this.tasks = (await import("@/assets/data/products.json")).default;
    },
    
    toggleShowAll() {
        this.showAll = !this.showAll;
        if(this.showAll){
            this.label = "Favourite";
            this.title = "All";
        } else {
            this.label = "All";
            this.title = "Favourite";
        }
    },
  },
});