<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref();
const autoCom = ref("");

const toast = useToast();
const items = ref([]);

const greet = () => {
  console.log("FromToast");
  toast.add({ severity: "success", summary: autoCom.value , detail: text.value, });
  console.log(toast);
};

const search = (event) => {
    let _items = [...Array(10).keys()];
    items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
}
</script>

<template>
  <ToastBase></ToastBase>
  <div class="container">
    <span class="p-float-label p-input-filled">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <ButtonBase label="Greet" @click="greet" icon="pi pi-user" style="margin-left: 20px; height: 50px;"></ButtonBase>
    <AutoComplete id="autocom" v-model="autoCom" dropdown :suggestions="items"  @complete="search" ></AutoComplete>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
