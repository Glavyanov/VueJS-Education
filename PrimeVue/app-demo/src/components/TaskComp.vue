<template>
    <h1>{{ taskStore.name }}</h1>
    <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task=task />
    </div>
</template>

<script setup>
import { useTaskStore } from '@/store/taskStore';
import TaskDetails from './TaskDetails.vue';
/* import { ref } from 'vue'; */

const taskStore = useTaskStore();
</script>