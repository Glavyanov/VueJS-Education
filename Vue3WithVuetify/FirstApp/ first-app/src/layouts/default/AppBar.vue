<template>
  <v-app-bar :elevation="16" :collapse="collapse">
    <v-app-bar-nav-icon @click="collapse = !collapse" class="ml-4" append-icon=""></v-app-bar-nav-icon>
   <!--  <v-icon icon="mdi-circle-slice-6" /> -->
    <v-spacer></v-spacer>
    <v-app-bar-title>
      <section>
        <h1 style="display: inline-block;">{{ header }}</h1>
      </section>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  //
  import { ref } from 'vue';
  const header = ref("Vuetify app");
  const collapse = ref(false);
</script>
