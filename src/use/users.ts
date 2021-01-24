import { ref, Ref } from "vue";
import { useFetch } from "@/use/fetch";

interface User {
  id: number;
  name: string;
  email: string;
}

type UsableUsers = Promise<{ users: Ref<User[] | undefined> }>;

export default async function useUsers(): UsableUsers {
  const loading: Ref<boolean> = ref(false);
  const { responce: users, request } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!loading.value) {
    await request();
    loading.value = true;
  }
  return { users };
}
