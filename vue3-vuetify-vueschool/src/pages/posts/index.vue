<template>
  <div>
    <h1>Posts</h1>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>

    <v-data-table
      :headers="[
        {
          title: 'Post Title',
          align: 'center',
          sortable: true,
          key: 'title'
        },
        { title: 'Author', align: 'center', key: 'author', sortable: true },
      ]"
      :items="posts"
      show-select
      item-value="title"
      v-model="selected"
      :search="search"
    >
      <template v-slot:[`item.title`]="{ item }">
        <v-dialog fullscreen>
          <template v-slot:activator="{ props }">
            <button v-bind="props">{{ item.title }}</button>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Edit Post">
              <v-card-text>
                <PostForm
                  ref="postForm"
                  :post="item"
                  @submit="isActive.value = false"
                />
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Cancel" @click="isActive.value = false"></v-btn>

                <v-btn
                  color="blue"
                  variant="flat"
                  text="Save Post"
                  @click="postForm.submit()"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PostForm from "@/components/PostForm.vue";
const posts = ref([
  { title: "Post 1", author: "Fred" },
  { title: "Post 2", author: "Wilma" },
  { title: "Post 3", author: "Barney" },
  { title: "Post 4", author: "Bam-Bam" },
  { title: "Post 5", author: "Fred" },
  { title: "Post 6", author: "Wilma" },
  { title: "Post 7", author: "Barney" },
  { title: "Post 8", author: "Bam-Bam" },
  { title: "Post 9", author: "Fred" },
  { title: "Post 10", author: "Wilma" },
  { title: "Post 11", author: "Barney" },
  { title: "Post 12", author: "Bam-Bam" },
]);

const selected = ref([]);
const search = ref("");
const postForm = ref();
</script>
