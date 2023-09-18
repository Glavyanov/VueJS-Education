<template>
  <v-app-bar rounded :elevation="16" :collapse="collapse">
    <v-icon icon="mdi-circle-slice-6" @click="collapse = !collapse" class="ml-4"/>
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
