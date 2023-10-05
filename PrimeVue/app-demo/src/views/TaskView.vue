<template>
    <div class="container-tasks">
        <TaskComp />
    </div>
</template>
<script setup>
import TaskComp from '@/components/TaskComp.vue';
</script>

<style scoped>
.container-tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}
</style>