<template>
  <Card style="width: 400px">
    <template #header>
    </template>
    <template #title>{{ task.title }}</template>
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
import Card from "primevue/card";

defineProps({
  task: Object,
});
</script>
