import { ref } from 'vue';

export default function useAlert(startingVisibilty = false) {
  const alertIsVisible = ref(startingVisibilty);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [
    alertIsVisible,
    showAlert,
    hideAlert,
  ];
}
