<template>
  <Card style="width: 400px">
    <template #header>
      <img alt="N/A" :src="task.pic" />
    </template>
    <template #title>
      {{ task.title }}
      <Badge :value="count"></Badge>
    </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
      </p>
    </template>
    <template #footer>
      <ButtonBase icon="pi pi-check" label="Save" @click="showDialog = true" />
      <ButtonBase
        icon="pi pi-times"
        label="Cancel"
        severity="secondary"
        style="margin-left: 0.5em"
        @click="goToHome"
      />
      <span style="margin-left: 25px">
        <i class="pi pi-fw pi-trash" v-if="!task.isFav"></i>
        <i class="pi pi-spin pi-spinner" v-if="!task.isFav"></i>
        <i class="pi pi-spin pi-cog" v-if="!task.isFav"></i>
        <i class="pi pi-spin pi-heart-fill" v-if="task.isFav"></i>
      </span>
    </template>
  </Card>
  <Dialog
    modal
    :draggable="false"
    v-model:visible="showDialog"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    :pt="{
      footer: { style: { 'background-color': 'yellow' } },
      header: { style: { 'background-color': '#2674b9' } },
      content: { style: { 'background-color': '#2674b9' } },
    }"
  >
    <template #header>
      <div class="dialog-head-div">
        <Avatar
          :image="task.pic"
          shape="circle"
          :pt="{ root: { style: { background: 'transparent' } } }"
        />
        <span class="dialog-head-title">{{ task.title }}</span>
      </div>
    </template>
    <p>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea saepe est
        earum laboriosam tempora, quibusdam quis quaerat nostrum autem itaque
        quasi debitis ipsum in pariatur fuga, blanditiis provident, et quas.
      </span>
    </p>
    <template #footer>
      <ButtonBase
        label="Ok"
        icon="pi pi-check"
        @click="showDialog = false"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
import Card from "primevue/card";
import Badge from "primevue/badge";
import { useCounterStore } from "@/store/counterStore";
import { storeToRefs } from "pinia";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";

defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const router = useRouter();
const { count } = storeToRefs(useCounterStore());
const showDialog = ref(false);

const goToHome = () => {
  router.push({ name: "home" });
};
</script>

<style scoped>
.dialog-head-div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.dialog-head-title {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
