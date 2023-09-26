<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row class="d-flex justify-start">
        <v-img height="300" src="@/assets/logo.svg" id="activateOverlay"/>
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            max-width="344"
            v-bind="props"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

            <v-card-text>
              <h2 class="text-h6 text-warning">
                Magento Forests
              </h2>
              Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
            </v-card-text>

            <v-card-title>
              <v-rating
                :model-value="2"
                dense
                color="orange"
                background-color="orange"
                hover
                class="me-2"
              ></v-rating>
              <span class="text-primary text-subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-btn variant="flat">See more info</v-btn>
            </v-overlay>
          </v-card>
        </v-hover>
      </v-row>
      
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold" >Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex  justify-center">
        <v-col cols="auto">
          <v-btn @click="overlay = !overlay" variant="plain" size="x-large">
            <v-icon icon="mdi-home"  size="x-large"/>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-row class="ma-2" justify="center">
          <v-btn-toggle v-model="selectedLetters" multiple rounded  color="blue">
            <v-btn  class="text-teal-lighten-3" v-for="(ch, index) in ['V','U','E','T','I','F','Y']" :key="index">{{ch}}</v-btn>
          </v-btn-toggle>
        </v-row>
        </v-col>

        <v-col cols="auto">
          <div class="text-center">
            <v-btn
              color="primary"
              class="hidden-md-and-up"
            >
              Open Dialog

              <v-dialog
                v-model="dialog"
                activator="parent"
                width="auto"
              >
                <v-card>
                  <v-card-text class="bg-indigo-accent-2">
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
    <v-overlay v-model="overlay"  class="align-center justify-center">
      <v-progress-circular
        color="red"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
    <v-overlay activator="#activateOverlay"/>
  </v-container>
</template>

<script setup>
  import { ref, watch } from 'vue';
  const selectedLetters = ref([]);
  const dialog = ref(false);
  const overlay = ref(false);

  watch(() => overlay.value,
    (val) =>{
      val && setTimeout(() => {
          overlay.value = false
        }, 2000)
    }
  )
</script>
