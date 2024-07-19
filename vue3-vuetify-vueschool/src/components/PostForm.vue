<template>
  <v-form v-model="valid" @submit.prevent="handleSubmit" ref="formEl">
    <v-row>
      <v-col cols="3">
        <v-switch label="Published" v-model="form.published"></v-switch>
      </v-col>
      <v-col cols="3">
        <v-checkbox
          indeterminate
          v-model="form.published"
          label="Published"
        ></v-checkbox>
      </v-col>
    </v-row>

    <v-text-field
      :modelValue="form.title"
      @change="
        form.title = $event.target.value;
        isUpdate = true;
      "
      label="Title"
      validate-on="lazy"
      :rules="[asyncValidation]"
    />
    <v-combobox
      v-model="form.tags"
      :items="['News', 'Tutorial', 'Event']"
      label="Tags"
      multiple
      chips
      :rules="[isNotEmpty]"
    ></v-combobox>
    <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      placeholder="Upload a Feature Image"
      prepend-icon="mdi-camera"
      label="Feature Image"
      v-model="form.image"
    ></v-file-input>
    <v-textarea
      label="Post Body"
      v-model="form.body"
      :rules="[isRequired]"
    ></v-textarea>

    <button ref="submitBtn" type="submit" class="d-none">Submit</button>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["submit"]);
const props = defineProps<{
  post: Record<string, any>;
}>();
const form = ref({
  title: "",
  tags: [],
  published: null,
  body: "",
  image: [],
  ...props.post,
});
const isUpdate = ref(false);

const valid = ref(true);
function isNotEmpty(value: string[]) {
  if (value && value.length) return true;
  return "Please choose at least one option";
}
function isRequired(value: string) {
  if (value) return true;
  return "Field is required";
}
async function asyncValidation(value: string) {
  if (!isUpdate.value) return true;
  isUpdate.value = false;
  const res = await fetch(`https://httpbin.org/status/${value}`);
  if (res.ok) return true;
  return "Bad response code";
}

function handleSubmit() {
  if (!valid.value) return false;
  console.log("submitting", form.value);
  emit("submit");
}
const submitBtn = ref();
const submit = () => submitBtn.value.click();
defineExpose({ submit });
</script>
