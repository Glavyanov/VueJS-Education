<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
   onMounted,
  /*onBeforeUnmount,
  onUnmounted,*/
  onBeforeUpdate,
  onUpdated, 
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });
    console.log(context);

    context.emit('save-data'); // this.$emit('save-data', 1); in Options API

    const age = inject('userAge');

    onBeforeMount (function(){
    console.log('onBeforeMount');
    });

    onMounted (function(){
    console.log('onMounted');
    });
    onBeforeUpdate (function(){
    console.log('onBeforeUpdate');
    });
    onUpdated (function(){
    console.log('onUpdated');
    });
    
    return {
      userName,
      age,
    };
  },
};
</script>
