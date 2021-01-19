<template>
  <div class="card">
    <h1>Reusable</h1>

    <button class="btn primary">Показать сообщение</button>
    <button class="btn" @click="navigateHome">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "ReusablePage",
  setup() {
    const router = useRouter();
    const route = useRoute();

    function navigateHome() {
      console.log(route.path);
      router.push({ name: "home" });
    }

    return {
      navigateHome,
    };
  },
};
</script>

<style scoped></style>
