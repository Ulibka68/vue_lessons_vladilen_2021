import { ref, Ref } from "vue";

type FetchRequest = () => Promise<void>;

interface UsableFetch<T> {
  responce: Ref<T | undefined>;
  request: FetchRequest;
}

/* eslint-disable no-undef */
export function useFetch<T>(
  url: RequestInfo,
  options?: RequestInit
): UsableFetch<T> {
  /* eslint-enable no-undef */
  const responce = ref<T>();

  const request = async () => {
    const res = await fetch(url, options);
    responce.value = await res.json();
  };

  return { responce, request };
}
