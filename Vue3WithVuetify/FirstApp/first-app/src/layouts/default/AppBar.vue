<template>
  <v-app-bar rounded :elevation="16" :collapse="collapse" height="200" image="@/assets/logo.svg" elevate-on-scroll>
    <v-app-bar-nav-icon @click="collapse = !collapse" class="ml-4"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-app-bar-title>
        <h1 style="display: inline-block;">{{ header }}</h1>
    </v-app-bar-title>
    <v-dialog>
      <template v-slot:activator="{ props}">
        <v-btn icon v-bind="props">
          <v-icon class="mr-1" icon="mdi-account" size="x-large"/>
        </v-btn>
      </template>
      <v-card>
        <v-card-title><span>Account Title</span></v-card-title>
        <v-card-subtitle><span>Account subtitle secondary text</span></v-card-subtitle>
        <v-card-text><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolorum dolorem voluptatum? Consequuntur dolores consequatur nihil, tempora natus dicta voluptatibus laboriosam velit facilis pariatur, labore aliquam cum dolore voluptate magni.
        Nesciunt blanditiis laboriosam necessitatibus nam voluptatum! Alias quaerat repellendus ducimus velit similique nobis magnam ad temporibus voluptatum, voluptates quae impedit molestiae quisquam. Laborum est saepe amet ab quas aliquid odit!</p></v-card-text>
        <v-card-actions>
          <v-btn icon >
            <v-icon class="mr-1" icon="mdi-alert-outline" size="x-large"/>
          </v-btn>
          <v-btn >
            <v-icon class="mr-1" icon="mdi-alert-plus" size="x-large"/>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu bottom left class="dialogTest">
        <template v-slot:activator="{ ...test}">
          <v-btn icon v-bind="test.props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <v-btn icon @click="getAttrs(test)">
            <v-icon>mdi-align-vertical-distribute</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 8" :key="n" @click="addTab" :variant="!(n % 2) ? 'tonal': 'text'">
            Option {{ n }}
          </v-list-item>
        </v-list>
    </v-menu>
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab v-for="tab in tabs" :key="tab">Tab {{ tab }}</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script setup>
  //
  import { ref } from 'vue';
  const header = ref("Vuetify App");
  const collapse = ref(false);
  
  const tabs = ref([1, 2, 3, 4]);

  const addTab = (e) => {
    tabs.value.push(e.target.textContent);
  }

  const getAttrs = (attrs) =>{
    console.log(attrs);
  };
</script>
