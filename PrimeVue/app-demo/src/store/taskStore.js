import { defineStore } from "pinia";
import { ref } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {

    const tasks = ref([
        {id: 1, title: "buy some apple...", isFav: false},
        {id: 2, title: "buy that pinia...", isFav: true},
    ]);

    const name = ref("TestTasks");

    return {
        tasks,
        name
    }
});