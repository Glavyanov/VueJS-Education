<template>
  <h1>{{ taskStore.name }}</h1>
  <div v-for="task in taskStore.tasks" :key="task.id">
    <TaskDetails :task="task" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTaskStore } from "@/store/taskStore";
import TaskDetails from "./TaskDetails.vue";

const taskStore = useTaskStore();
const tasks = ref([]);

watch(
  () => taskStore.tasks,
  (val) => {
    tasks.value = val;
  }
)
</script>
