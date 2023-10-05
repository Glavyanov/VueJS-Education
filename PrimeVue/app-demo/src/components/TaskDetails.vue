<template>
  <h3>{{ task.title }}</h3>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  task: Object,
});
</script>
