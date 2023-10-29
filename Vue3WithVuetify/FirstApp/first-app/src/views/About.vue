<template>
  <div class="d-flex flex-column align-center">
    <h1 class="text-teal-lighten-1">About</h1>
    <div class="d-inline-flex flex-column align-center p-5">
      <p class="bg-light-blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi
        quis nulla laborum consequuntur aut veritatis itaque temporibus nihil
        nobis, tenetur cupiditate enim tempore tempora maxime, amet velit sint
        blanditiis?
      </p>
      <h1 class="text-h1 pa-10">Test</h1>
      <v-btn-group divided density="compact" elevation="20">
        <v-btn size="small" color="purple" class="text-white">
          One
          <v-icon size="small" class="ml-2">mdi-alert-circle</v-icon>
        </v-btn>
        <v-btn size="small" color="pink" class="text-white">
          Two
          <v-icon size="small" class="ml-2">mdi-alert-circle</v-icon>
        </v-btn>
        <v-btn size="small" color="purple" class="text-white">
          Three
          <v-icon size="small" class="ml-2">mdi-alert-circle</v-icon>
        </v-btn>
        <v-btn size="small" color="teal" class="text-white">
          <v-icon size="small" class="mr-2">mdi-email</v-icon>
          Email
        </v-btn>
      </v-btn-group>
      <div class="ma-4 hidden-sm-and-down">
        <v-btn
          rounded="circle"
          tile
          color="teal"
          size="33"
          @click="showDrawer = !showDrawer"
        >
          <v-icon size="small">mdi-heart</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const { showDrawer } = storeToRefs(useAppStore());
</script>
