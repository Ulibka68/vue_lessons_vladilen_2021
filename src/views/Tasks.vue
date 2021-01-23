<template>
  <div class="card">
    <h1 class="text-white center">Задач пока нет</h1>
    <!--    <AppStatus :type="'done'" />-->
  </div>
</template>

<script>
// import AppStatus from "@/components/AppStatus";

/* eslint-disable no-unused-vars */
import { useStore } from "vuex";
/* eslint-endable no-unused-vars */

// composition Заменяет data, methods, computed, watch
export default {
  // components: { AppStatus },
  async setup() {
    // const store = useStore();
    //
    // // загрузить данные пользователей Start
    // const countUsers = store.getters["Auth/getUserListLength"];
    // console.log("countUsers ---------------------", countUsers);
    // if (countUsers <= 1) {
    //   await store.dispatch("Auth/readUserListFromDB");
    // }
    // загрузить данные пользователей END
  },
};
</script>
