import { ref } from "vue";
export function useAlert(visibility = false) {
  // код для alert
  const alert = ref(visibility);
  const toggle = () => {
    alert.value = !alert.value;
  };
  const close = () => {
    alert.value = false;
  };
  return { alert, toggle, close };
}
