<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{ name: 'destination.show', params: { id: destination.id } }"
    >
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script setup>
import sourceData from "@/data.json";
const destinations = sourceData.destinations;
</script>

<style scoped>
#nav .vue-school-active-link {
  color: rgb(78, 162, 196);
  border-bottom: 2px solid rgb(78, 162, 196);
}
</style>
