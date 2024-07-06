<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
      density="comfortable"
      :elevation="10"
      color="orange"
    >
      <template #prepend>
        <v-app-bar-nav-icon v-if="mobile" @click.stop="drawer = !drawer" variant="plain"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link :to="'/'" class="text-decoration-none text-white ml-3">Code Topics</router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-avatar 
              image="https://avatars.githubusercontent.com/u/89041019?v=4"
              size="50"
              v-bind="props"
            >
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in ['Profile', 'Settings', 'Logout']"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      expand-on-hover
      rail
      v-model="drawer"
    >
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-note-multiple"
            title="Posts"
            :to="'posts'"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-comment-multiple-outline"
            title="Comments"
            :to="'comments'"
          ></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useDisplay } from 'vuetify'

  const { mobile } = useDisplay()
  const drawer = ref(true);

</script>

<style>
 .rounded.rounded-md{
  position: unset !important;
 }
</style>