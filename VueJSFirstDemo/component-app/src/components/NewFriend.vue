<template>
  <form id="new-friend-form" @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>


export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      console.log(this.$refs.nameInput);

      this.$emit("add-contact",
        /* this.nameInput, */
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail);
    },
  },
};
</script>

<style>
#new-friend-form label {
  color: bisque;
}
</style>
