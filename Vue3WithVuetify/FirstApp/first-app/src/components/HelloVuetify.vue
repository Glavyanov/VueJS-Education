<template>
    <v-card
      class="mx-auto hidden-md-and-down"
      color="#26c6da"
      theme="dark"
      max-width="400"
      prepend-icon="mdi-twitter"
      title="Twitter"
    >
      <template #prepend-icon></template>
  
      <v-card-text class="text-h5 py-2">
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="w-100">
          <template v-slot:prepend>
            <v-avatar
              color="grey-darken-3"
              image="<https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light>"
            ></v-avatar>
          </template>
  
          <v-list-item-title>Evan You</v-list-item-title>
  
          <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>
  
          <template v-slot:append>
            <div class="justify-self-end">
              <v-icon class="mr-1" icon="mdi-heart"></v-icon>
              <span class="subheading mr-2">256</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1" icon="mdi-share-variant"></v-icon>
              <span class="subheading">45</span>
            </div>
          </template>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-sheet class="bg-grey-darken-3">
      <v-container style="height: 100px"> </v-container>
    </v-sheet>
  </template>

<script setup>
</script>