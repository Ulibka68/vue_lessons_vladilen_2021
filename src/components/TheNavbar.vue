<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <h3>{{ currentUser }}</h3>

    <ul class="navbar-menu">
      <TheNavbarElement path="/" title="Главная" />
      <TheNavbarElement path="/tasks" title="Все задачи" />
      <TheNavbarElement path="/create-task" title="Создать задачу" />
      <TheNavbarElement path="/login" title="Login" />
      <TheNavbarElement path="/register" title="Зарегистирироваться" />
      <TheNavbarElement path="/logout" title="Logout" />
      <TheNavbarElement path="/test" title="Test" />
    </ul>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TheNavbarElement from "@comp/TheNavbarElement";

export default {
  components: { TheNavbarElement },
  setup() {
    const store = useStore();
    return {
      currentUser: computed(() => store.getters["Auth/currentUser"]),
    };
  },
};
</script>
