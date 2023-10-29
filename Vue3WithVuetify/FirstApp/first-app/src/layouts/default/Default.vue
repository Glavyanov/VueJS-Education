<template>
  <v-app class="bg-grey-darken-3">
    <default-bar />

    <default-view />
    <v-navigation-drawer v-model="showDrawer" app class="indigo">
      <v-btn
        rounded="circle"
        tile
        color="teal"
        size="33"
        @click="showDrawer = !showDrawer"
      >
        <v-icon size="small">mdi-heart</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <default-footer />
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./View.vue";
import DefaultFooter from "./Footer.vue";

import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";
const { showDrawer } = storeToRefs(useAppStore());
</script>
