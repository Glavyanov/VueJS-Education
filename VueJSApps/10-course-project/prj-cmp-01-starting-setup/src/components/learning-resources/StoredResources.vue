<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :id="res.id"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      @alert-resource="alertResource"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  inject: ['resources','alertResource'],
  components: {
    LearningResource,
  },
};

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
