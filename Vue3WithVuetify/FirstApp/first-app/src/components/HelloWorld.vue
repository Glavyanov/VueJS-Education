<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="300" src="@/assets/logo.svg" />

      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-icon icon="mdi-home"  />
        </v-col>

        <v-col cols="auto">
          <v-row class="ma-2" justify="center">
          <v-btn-toggle v-model="selectedLetters" multiple rounded  color="blue">
            <v-btn v-for="(ch, index) in ['V','U','E','T','I','F','Y']" :key="index">{{ch}}</v-btn>
          </v-btn-toggle>
        </v-row>
        </v-col>

        <v-col cols="auto">
          <div class="text-center">
            <v-btn
              color="primary"
            >
              Open Dialog

              <v-dialog
                v-model="dialog"
                activator="parent"
                width="auto"
              >
                <v-card>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';
  const selectedLetters = ref([]);
  const dialog = ref(false);
</script>
