<template>
  <section class="container">
    <user-data
      v-if="show"
      :first-name="firstName"
      :last-name="lastName"
      class="myClass"
    ></user-data>
    <button @click="setNewData">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName"/>
      <input type="text" placeholder="Last Name" @input="setLastName"/> -->
      <!-- <input type="text" placeholder="First Name" v-model="firstName"/>
      <input type="text" placeholder="Last Name" v-model="lastName"/> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import UserData from './components/UserData.vue';

import { ref, computed, watch, provide } from 'vue';
/* import { reactive } from 'vue'; */ // only work with object

export default {
  components: { UserData },
  props: [],
  setup() {
    /*  const userName = ref('Maximilian'); */
    const uAge = ref(31);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const show = ref(true);

    provide('userAge', uAge);
    /* const user = ref({
      name:'Max',
      age: 32,
    }); */
    /* const user = reactive({
      name:'Max',
      age: 32,
    }); */

    /* watch(uAge, function(newValue, oldValue){
      console.log('Old Age: ' + oldValue);
      console.log('New Age: ' + newValue);
    }); */

    const userName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, userName], function (newValues, oldValues) {
      console.log('Old Age: ' + oldValues[0]);
      console.log('New Age: ' + newValues[0]);
      console.log('Old Name: ' + oldValues[1]);
      console.log('New Name: ' + newValues[1]);
      
      if (newValues[1].trim() === 'hide') {
        show.value = false;
      }else{
        show.value = true;
      }
    });

    function setNewData() {
      uAge.value = 36;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    /* function setFirstName(e){
      firstName.value = e.target.value;
    }
    function setLastName(e){
      lastName.value = e.target.value;
    } */

    /* console.log(isRef(uAge.value));
    console.log(isReactive(user.name, user.age)); */

    /* setTimeout(()=>{
      user.value.name = 'Maximilian';
      user.value.age = 35;
      user.name = 'Maximilian';
      user.age = 35;

    }, 2000); */

    return {
      userName,
      age: uAge,
      setNewData,
      firstName,
      lastName,
      setLastName,
      lastNameInput,
      show,
      /* setFirstName,
      setLastName, */
      /* user,*/
    };
  },

  /* data() {
    return {
      userName: 'Maximilian',
    };
  }, */
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
