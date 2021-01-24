import { ref } from "vue";

// eslint-disable-next-line no-undef
export function useFetch(url: RequestInfo, options?: RequestInit) {
  const responce = ref(null);

  const request = async () => {
    const res = await fetch(url, options);
    responce.value = await res.json();
  };

  return { responce, request };
}
