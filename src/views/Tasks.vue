<template v-if="true">
  <h1 class="text-white center">Задач пока нет</h1>
  <template v-if="true">
    <h3 class="text-white">Всего активных задач: 0</h3>
    <h3 class="text-white">Всего задач: {{ taskListLength }}</h3>
    <div class="card">
      <h2 class="card-title">
        Название задачи
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date().toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
</template>

<script>
import AppStatus from "@/components/AppStatus";

/* eslint-disable no-unused-vars */
import { useStore } from "vuex";
import { computed, ref } from "vue";
/* eslint-endable no-unused-vars */

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const isLoading = ref(false);

    const countUsers = computed(() => store.getters["Auth/getUserListLength"]);
    console.log(countUsers.value);

    const getUsers = async () => {
      isLoading.value = true;
      await store.dispatch("Auth/readUserListFromDB");
      isLoading.value = false;
    };

    return {
      taskListLength: computed(() => store.getters["Tasks/taskListLength"]),
      countUsers,
      getUsers,
    };
  },
};
// Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending']
</script>
