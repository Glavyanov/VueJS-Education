<template>
  <h1>{{ name }}</h1>
  <div v-for="task in tasks" :key="task.id">
    <TaskDetails :task="task" />
  </div>
</template>

<script setup>
import { useTaskStore } from "@/store/taskStore";
import TaskDetails from "./TaskDetails.vue";
import { storeToRefs } from "pinia";

useTaskStore().getTasks();
const { name, tasks } = storeToRefs(useTaskStore());

</script>
