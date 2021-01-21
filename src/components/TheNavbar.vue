<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <h3>Иван Иванов</h3>

    <ul class="navbar-menu">
      <TheNavbarElement path="/" title="Главная" />
      <TheNavbarElement path="/tasks" title="Все задачи" />
      <TheNavbarElement path="/create-task" title="Создать задачу" />
      <TheNavbarElement path="/login" title="Login" />
      <TheNavbarElement path="/logout" title="Logout" />
      <TheNavbarElement path="/test" title="Test" />
    </ul>
  </header>
</template>

<script>
import TheNavbarElement from "@comp/TheNavbarElement";
export default {
  components: { TheNavbarElement },
};
</script>
