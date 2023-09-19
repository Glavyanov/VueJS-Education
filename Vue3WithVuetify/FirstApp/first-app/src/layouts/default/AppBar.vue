<template>
  <v-app-bar rounded :elevation="16" :collapse="collapse" height="250" image="@/assets/logo.svg">
    <v-app-bar-nav-icon @click="collapse = !collapse" class="ml-4"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-app-bar-title>
      <section>
        <h1 style="display: inline-block;">{{ header }}</h1>
      </section>
    </v-app-bar-title>
    <v-btn icon>
      <v-icon class="mr-1" icon="mdi-account" size="x-large"/>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 4" :key="n" @click="() => {}">
            Option {{ n }}
          </v-list-item>
        </v-list>
      </v-menu>
  </v-app-bar>
</template>

<script setup>
  //
  import { ref } from 'vue';
  const header = ref("Vuetify app");
  const collapse = ref(false);
</script>
