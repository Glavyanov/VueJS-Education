<template>
    <ToastBase position="top-center"></ToastBase>
    <div class="container">
      <span class="p-float-label p-input-filled">
        <InputText id="txt" v-model="text" :pt="{root: { style: {'font-size': '32px'}}}"/>
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
      <ButtonBase
      label="Change Theme"
      @click="isDark = !isDark"
      :icon="icon"
      style="margin-left: 20px; height: 50px"
      ></ButtonBase>
      <ButtonBase
        :label="store.name"
        @click="store.increment"
        icon="pi pi-sort-up"
        style="margin-left: 20px; height: 50px"
      ></ButtonBase>
      <span class="p-float-label p-input-filled" style="margin-left: 20px; margin-right: 20px;">
        {{ count }}
      </span>
      <ButtonBase
        label="Down"
        @click="store.decrement"
        icon="pi pi-sort-down"
        style="margin-left: 20px; height: 50px"
      ></ButtonBase>
      <span style="margin-left: 20px; margin-right: 20px;" :style="oddOrEven === 'even' && { 'color': 'red' }">
        The counter is 
        {{ oddOrEven }}
      </span>
    </div>
    
  </template>
  
  <script setup>
  import { ref, watch, computed} from "vue";
  import { useToast } from "primevue/usetoast";
  import { usePrimeVue } from "primevue/config";
  import { useCounterStore } from '@/store/counterStore';
  import { useThemeStore } from '@/store/themeStore';
  import { storeToRefs } from "pinia";
  
  const PrimeVue = usePrimeVue();
  
  const text = ref();
  
  const autoCom = ref("");
  const { isDark, icon } = storeToRefs(useThemeStore());
  const toast = useToast();
  const items = ref([]);
  const dateTest = new Date("1970-01-14T14:35:14.200Z").toISOString();
  const refDate = ref(dateTest);
  const store = useCounterStore();
  const oddOrEven = computed(() => store.oddOrEven);
  const count = computed(() => store.count);
  
  const greet = () => {
    toast.add({
      severity: "success",
      summary: autoCom.value,
      detail: text.value,
      life: "3000",
    });
  };
  
  const search = (event) => {
    let _items = [...Array(10).keys()];
    items.value = event.query
      ? [...Array(10).keys()].map((item) => event.query + "-" + item)
      : _items;
  };
  
  watch(isDark , () => {
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
  </script>

<style scoped>
.container {
  flex: 2;
}

#app{
  justify-content: space-between;
}
</style>
  