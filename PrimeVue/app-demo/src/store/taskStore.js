import { defineStore } from "pinia";
import { ref } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {

    const tasks = ref([
        {id: 1, title: "buy some apple...", isFav: false, pic: "/pic/apple.png"},
        {id: 2, title: "buy that pinia...", isFav: true, pic: "/pic/pinia.png"},
    ]);

    const name = ref("TestTasks");

    return {
        tasks,
        name
    }
});