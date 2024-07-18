<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import styles from "@/assets/example.module.css";
import data from "@/data.json";
import { developerMood } from "@/data.json";

console.log(data);
console.log(developerMood);
console.log(import.meta.env);

const images = import.meta.globEager("./assets/avatars/*.jpg");
</script>

<template>
  <img alt="Vue logo" src="@/assets/tiny-vue-logo.png" />
  <h1 :class="styles.example">CSS Modules</h1>
  <HelloWorld msg="Vue 3 + Vite" />
  <div>
    <img v-for="image in images" :key="image" :src="image.default" alt="img" />
  </div>
</template>
