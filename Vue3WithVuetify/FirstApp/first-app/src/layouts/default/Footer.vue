<template>
    <v-bottom-navigation
      app
      grow
      class="bg-grey-darken-2"
    >
      <v-btn
        value="music"
        height="100%"
      >
        <span>Music</span>
        <v-icon>mdi-music</v-icon>
      </v-btn>

      <v-btn
        value="books"
        height="100%"
      >
        <span>Books</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn
        value="photos"
        height="100%"
      >
        <span>Photos</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>