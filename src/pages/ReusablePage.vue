<template>
  <AppAlert
    v-if="alert"
    @close="close"
    title="Работа с Composition"
    type="primary"
  ></AppAlert>
  <div class="card">
    <h1>Reusable</h1>

    <button class="btn primary" @click="toggle">
      {{ alert ? "Скрыть" : "Показать" }} сообщение
    </button>
    <button class="btn" @click="navigateHome">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import AppAlert from "@/components/AppAlert";
import { useAlert } from "@/use/alert";

export default {
  name: "ReusablePage",
  setup() {
    // const { alert, toggle, close } = useAlert();

    const router = useRouter();
    const route = useRoute();

    function navigateHome() {
      console.log(route.path);
      router.push({ name: "home" });
    }

    return {
      navigateHome,
      ...useAlert(),
    };
  },
  components: { AppAlert },
};
</script>

<style scoped></style>
