<template>
  <header class="navbar">
    <h3>Freelance</h3>

    <ul class="navbar-menu">
      <TheNavbarElement path="/" title="Главная" />
      <TheNavbarElement path="/tasks" title="Все задачи" />
      <TheNavbarElement path="/create-task" title="Создать задачу" />
      <TheNavbarElement path="/login" title="Login" />
      <!--      <li>-->
      <!--        <router-link to="/login">Login</router-link>-->
      <!--      </li>-->
      <TheNavbarElement path="/logout" title="Logout" />
    </ul>
  </header>
</template>

<script>
import TheNavbarElement from "@comp/TheNavbarElement";
export default {
  components: { TheNavbarElement },
};
</script>
