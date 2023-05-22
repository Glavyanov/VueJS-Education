<template>
  <ToastBase></ToastBase>
  <div class="container">
    <span class="p-float-label p-input-filled">
      <InputText id="txt" v-model="text" />
      <label for="txt">Text</label>
    </span>
    <ButtonBase
      label="Greet"
      @click="greet"
      icon="pi pi-user"
      style="margin-left: 20px; height: 50px"
    ></ButtonBase>
    <AutoComplete
      id="autocom"
      v-model="autoCom"
      dropdown
      :suggestions="items"
      @complete="search"
    ></AutoComplete>
  </div>
  <ButtonBase
    label="Change Theme"
    @click="isDark = !isDark"
    :icon="icon"
    style="margin-left: 20px; height: 50px"
  ></ButtonBase>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useToast } from "primevue/usetoast";
import { usePrimeVue } from "primevue/config";

const PrimeVue = usePrimeVue();

const text = ref();
const icon = ref("pi pi-moon");
const autoCom = ref("");
const isDark = ref(false);

const toast = useToast();
const items = ref([]);
const dateTest = new Date("1970-01-14T14:35:14.200Z").toISOString();
const refDate = ref(dateTest);

const greet = () => {
  toast.add({
    severity: "success",
    summary: autoCom.value,
    detail: text.value,
  });
};

const search = (event) => {
  let _items = [...Array(10).keys()];
  items.value = event.query
    ? [...Array(10).keys()].map((item) => event.query + "-" + item)
    : _items;
};

watch(isDark, () => {
  refDate.value = new Date(refDate.value);
  console.log(refDate.value);
  refDate.value = new Date(refDate.value).toISOString();
  console.log(refDate.value);
  if (isDark.value) {
    PrimeVue.changeTheme(
      "lara-light-purple",
      "lara-dark-indigo",
      "id-to-link",
      () => (icon.value = "pi pi-sun")
    );
  } else {
    PrimeVue.changeTheme(
      "lara-dark-indigo",
      "lara-light-purple",
      "id-to-link",
      () => (icon.value = "pi pi-moon")
    );
  }
});

watchEffect(() => {
    const d = new Date(refDate.value);
    console.log(refDate.value)
  const check =  !Number.isNaN(d.valueOf()) && d.toISOString() === refDate.value;
    if (check) {
      confirm(refDate.value);
    } else {
      alert("Validation failed");
    }
  }
);
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
