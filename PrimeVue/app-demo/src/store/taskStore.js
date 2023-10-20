import { defineStore } from "pinia";
import { ref } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
    const getTasks = async () => (await import("@/assets/data/products.json")).default;
    const name = ref("Task Store");
    const tasks = ref([]);
    getTasks().then(res => res.products)
              .then(data => tasks.value = data)
              .catch(err => console.log(err));
              
    return {
        tasks,
        name
    }
});