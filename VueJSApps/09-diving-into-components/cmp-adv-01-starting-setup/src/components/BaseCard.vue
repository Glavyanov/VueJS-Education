<template>
  <header>
    <slot name="header">
      <!-- <h2>The Default</h2> -->
    </slot>
  </header>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    /* console.log(this.$slots.header); */
  },
};
</script>

<style scoped>
section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
