import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(3);
    const name = ref('Increase');
    const upperBoard = 9;

    const doubleCount = () => count.value = count.value * 2;

    const oddOrEven = computed(() => {
      return count.value % 2 !== 1 ? 'even' : 'odd';
    })

    function increment() {
      ++count.value;
      count.value > upperBoard ? doubleCount() : null;
    }

    function decrement() {
      count.value && count.value--;
    }

    return { count, name, doubleCount, increment, decrement, oddOrEven }
  })