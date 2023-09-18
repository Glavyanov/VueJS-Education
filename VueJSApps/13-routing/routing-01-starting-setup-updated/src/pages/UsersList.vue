<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <button @click="notFoundPage"> Not Found</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      savedChanges: false,
    };
  },
  methods:{
    confirmInput(){
      this.$router.push('/teams');
      /* this.$router.back();
      this.$router.forward(); */
    },
    saveChanges(){
      this.savedChanges = true;
    },
    notFoundPage(){
      this.$router.push('not-found');
    },
  },
  beforeRouteEnter(to, from, next){
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UserList Cmp beforeRouteLeave');
    console.log(to, from);
    if(this.savedChanges){
      next();
    }else{
      const choise = confirm("Are you sure? You got unsaved changes!");
      next(choise);
    }
  },
  unmounted(){
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>