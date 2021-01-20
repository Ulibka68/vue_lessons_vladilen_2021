<template>
  <app-alert
    v-if="alert"
    title="Работаем с Composition"
    type="primary"
    @close="close"
  ></app-alert>

  <div class="card">
    <h1>Переиспользование</h1>

    <button class="btn primary" @click="toggle">
      {{ alert ? "Закрыть" : "Показать" }} сообщение
    </button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AppAlert from "../AppAlert";
import { useAlert } from "../use/alert";

export default {
  setup() {
    const router = useRouter();

    const navigate = () => router.push("/");

    return {
      navigate,
      ...useAlert(true),
    };
  },
  components: { AppAlert },
};
</script>

<style scoped></style>
