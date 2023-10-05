<template>
  <section>
    <h2>{{ experience.name }}</h2>
    <GoBack />
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>
<script setup>
import sourceData from "@/data.json";
import { computed, defineProps } from "vue";
import GoBack from "@/components/GoBack.vue";
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  experienceSlug: {
    type: String,
    required: true,
  },
});
const destination = computed(() =>
  sourceData.destinations.find((dest) => dest.id === props.id)
);

const experience = computed(() =>
  destination.value.experiences.find((exp) => exp.slug === props.experienceSlug)
);
</script>
