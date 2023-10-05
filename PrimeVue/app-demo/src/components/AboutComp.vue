<template>
  <div class="container">
    <ButtonBase
    :label="(store.count).toString()"
    @click="store.doubleCount"
    style="margin-left: 20px; height: 50px"
    ></ButtonBase>
    <h1 id="about">About</h1>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counterStore";
const store = useCounterStore();

</script>

<style scoped>
.container {
  color: rgb(120, 120, 150);
}

#about{
  transform: rotate(30deg);
}
</style>
