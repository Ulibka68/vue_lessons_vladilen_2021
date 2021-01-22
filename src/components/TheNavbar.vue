<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <h3>{{ currentUser }}</h3>

    <!--    // 'always' 'auth' 'non-auth'  isLogged -->
    <ul class="navbar-menu">
      <template v-for="(menuElm, key) in menuDescription" :key="key">
        <template
          v-if="
            menuElm.show == 'always' ||
            (menuElm.show == 'non-auth' && !isLogged) ||
            (menuElm.show == 'auth' && isLogged)
          "
        >
          <TheNavbarElement
            v-if="menuElm.click"
            :path="menuElm.path"
            :title="menuElm.title"
            @click.stop.prevent="menuElm.click"
          />
          <TheNavbarElement
            v-else
            :path="menuElm.path"
            :title="menuElm.title"
          />
        </template>
      </template>
    </ul>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { logout } from "@/utils/FBCustAuth";
import TheNavbarElement from "@comp/TheNavbarElement";
import { useRouter } from "vue-router";

export default {
  components: { TheNavbarElement },
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogout = () => {
      logout();
      router.replace({ name: "Home" });
    };

    // 'always' 'auth' 'non-auth'
    const menuDescription = [
      { path: "/", title: "Главная", show: "always" },
      { path: "/tasks", title: "Все задачи", show: "auth" },
      { path: "/create-task", title: "Создать задачу", show: "auth" },
      { path: "/login", title: "Login", show: "non-auth" },
      { path: "/register", title: "Зарегистирироваться", show: "non-auth" },
      { path: "/logout", title: "Logout", click: handleLogout, show: "auth" },
      { path: "/test", title: "Test", show: "always" },
    ];

    return {
      currentUser: computed(() => store.getters["Auth/currentUser"]),
      isLogged: computed(() => store.getters["Auth/isLogged"]),
      handleLogout,
      menuDescription,
    };
  },
};
/*
    <ul class="navbar-menu">
      <TheNavbarElement path="/" title="Главная" />
      <TheNavbarElement path="/tasks" title="Все задачи" />
      <TheNavbarElement path="/create-task" title="Создать задачу" />
      <TheNavbarElement path="/login" title="Login" />
      <TheNavbarElement path="/register" title="Зарегистирироваться" />
      <TheNavbarElement
        path="/logout"
        title="Logout"
        @click.prevent.stop="handleLogout()"
      />
      <TheNavbarElement path="/test" title="Test" />
    </ul>

 */
</script>
