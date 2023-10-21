<template>
  <h1>{{ name }} - {{title}}</h1>
  <div style="display: flex; flex-direction: column;">
    <div style="display: flex; flex-direction: row;" v-if="showAll">
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div style="display: flex; flex-direction: row;" v-else>
      <div v-for="favTask in favTasks" :key="favTask.id">
        <TaskDetails :task="favTask" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useTaskStore } from "@/store/taskStore";
import TaskDetails from "./TaskDetails.vue";
import { storeToRefs } from "pinia";

const { name, tasks, showAll, title } = storeToRefs(useTaskStore());
const favTasks = ref([]);

watch(showAll, () => {
  favTasks.value = tasks.value.filter((t) => t.isFav);
})

onMounted(async () => {
  await useTaskStore().getTasks();
  favTasks.value = tasks.value.filter((t) => t.isFav);
});
</script>
