<template>
  <Card style="width: 400px">
    <template #header>
      <img alt="N/A" :src="task.pic" />
    </template>
    <template #title>
      {{ task.title }}
      <Badge :value="store.count"></Badge>
    </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <ButtonBase icon="pi pi-check" label="Save" />
      <ButtonBase
        icon="pi pi-times"
        label="Cancel"
        severity="secondary"
        style="margin-left: 0.5em"
        @click="goToHome"
      />
      <span style="margin-left: 25px">
        <i class="pi pi-fw pi-trash"></i>
        <i class="pi pi-spin pi-spinner" />
        <i class="pi pi-spin pi-cog" />
      </span>
    </template>
  </Card>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import Card from "primevue/card";
import Badge from "primevue/badge";
import { useCounterStore } from "@/store/counterStore";

defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const store = useCounterStore();

const goToHome = () => {
  router.push({ name: "home" });
};
</script>
