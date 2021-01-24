import { ref, Ref } from "vue";
import { useFetch } from "@/use/fetch";

export default async function useUsers(): Promise<any> {
  const loading: Ref<boolean> = ref(false);
  const { responce: users, request } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!loading.value) {
    await request();
    loading.value = true;
  }
  return { users };
}
