<template>
  <div class="card">
    <h1>Пользователи</h1>

    <p style="color: red" v-if="error">{{ error }}</p>

    <Suspense v-else>
      <template #default>
        <UserList />
      </template>
      <template #fallback>
        <p>...Loading</p>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from "vue";
import UserList from "@/components/UserList.vue";

export default defineComponent({
  name: "Users",
  components: { UserList },
  setup() {
    // eslint-disable-next-line no-undef
    const error = ref<null | unknown>(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return {
      error,
    };
  },
});
</script>

<style scoped></style>
