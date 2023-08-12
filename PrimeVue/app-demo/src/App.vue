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
  <div class="tutorial">
    <h1>Vue watchEffect tutorial</h1>
    <textarea v-model="textForArea" />
    <p v-if="isTyping">Typing.....</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useToast } from "primevue/usetoast";

const text = ref("");
const autoCom = ref("");
const textForArea = ref("");
const isTyping = ref(false);
const toast = useToast();
const items = ref([]);

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

const stop = watchEffect((onInvalidate) => {
  if (textForArea.value.length > 0) {
    isTyping.value = true;
  }

  if (textForArea.value.length > 10) {
    isTyping.value = false;
    stop();
  }

  const showTypingStatus = setTimeout(() => {
    isTyping.value = false;
  }, 2000);

  onInvalidate(() => {
    clearInterval(showTypingStatus);
  });
});
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
}

.tutorial {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
