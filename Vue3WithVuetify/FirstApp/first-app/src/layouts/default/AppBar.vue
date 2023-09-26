<template>
  <v-app-bar rounded :elevation="16" :collapse="collapse" height="100" image="@/assets/logo.svg" class="bg-grey-darken-2">
    <v-app-bar-nav-icon @click="collapse = !collapse" class="ml-4" size="x-large"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-app-bar-title>
        <h1 style="display: inline-block;">{{ header }}</h1>
    </v-app-bar-title>
    <v-dialog width="800" transition="dialog-top-transition">
      <template v-slot:activator="{ props}">
        <v-btn icon v-bind="props" v-if="!collapse">
          <v-chip
            class="ma-2"
            color="primary"
            label
          >
            <v-icon class="mr-1" icon="mdi-account-circle-outline" size="x-large"/>
            John Doe
          </v-chip>
        </v-btn>
      </template>
      <v-card width="800">
        <v-card-title><span>Account Title</span></v-card-title>
        <v-card-subtitle><span>Account subtitle secondary text</span></v-card-subtitle>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolorum dolorem voluptatum? Consequuntur dolores consequatur nihil, tempora natus dicta voluptatibus laboriosam velit facilis pariatur, labore aliquam cum dolore voluptate magni.
              Nesciunt blanditiis laboriosam necessitatibus nam voluptatum! Alias quaerat repellendus ducimus velit similique nobis magnam ad temporibus voluptatum, voluptates quae impedit molestiae quisquam. Laborum est saepe amet ab quas aliquid odit!
            </p>
            <div class="text-h2 pa-12">text</div>
          </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn icon >
            <v-icon class="mr-1" icon="mdi-alert-outline" size="x-large"/>
          </v-btn>
          <v-btn icon>
            <v-icon class="mr-1" icon="mdi-alert-plus" size="x-large" />
          </v-btn>
          <v-btn
            variant="text"
            color="teal-accent-4"
            @click="reveal = !reveal"
          >
            Learn More
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="v-card--reveal"
            style="height: 100%;"
          >
            <v-card-title><p> Origin</p></v-card-title>
            <v-card-text>
              <p>
                late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ 
                late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                variant="text"
                @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-dialog>
    <v-btn icon class="ml-10">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
    <v-menu bottom left class="dialogTest" open-on-hover>
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
        <v-tab v-for="tab in tabs" :key="tab">
          <v-btn v-if="tab === 1" @click="goTo(tab)">
              Home
          </v-btn>
          <v-btn v-else-if="tab === 2" @click="goTo(tab)">
            About
          </v-btn>
          <span v-else>Tab {{ tab }}</span>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script setup>
  //
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const header = ref("Vuetify App");
  const collapse = ref(false);
  const reveal = ref(false);
  const router = useRouter();
  const tabs = ref([1, 2, 3, 4]);

  const addTab = (e) => {
    tabs.value.push(e.target.textContent);
  }

  const getAttrs = (attrs) =>{
    console.log(attrs);
  };

  const goTo = (tab) => {
    tab === 1 ? router.push({name: "Home"}) : router.push({name: "About"});
  }
</script>
