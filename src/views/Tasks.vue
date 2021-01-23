<template>
  <h1 class="text-white center">Задач пока нет</h1>
  <template v-if="true">
    <h3 class="text-white">Всего активных задач: 0</h3>
    <h3 class="text-white">Всего задач: {{ taskListLength }}</h3>
    <div class="card" v-for="task in taskList" :key="task.key">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.status" />
      </h2>
      <p>Пользователь: {{ getUserByUid(task.uid) }}</p>
      <p>
        <strong>
          <small>
            {{ task.date }}
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
  async setup() {
    const store = useStore();

    await store.dispatch("Auth/readUserListFromDB");
    await store.dispatch("Tasks/readTasks");

    console.log(
      store.getters["Auth/getUserByUid"]("W8VQvIZ2tuYmTUAd0aHfaxgWXSp2")
    );

    return {
      taskListLength: computed(() => store.getters["Tasks/taskListLength"]),
      taskList: computed(() => store.getters["Tasks/taskList"]),
      countUsers: computed(() => store.getters["Auth/getUserListLength"]),
      getUserByUid: computed(() => (uid) =>
        store.getters["Auth/getUserByUid"](uid)
      ),
    };
  },
};
// Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending']
/*
Пример:
  createdAt: 1611394328248
  date: "2021-01-23"
  description: "Задача1 descr"
  key: "-MRi_XPr-LUD8WNWPiF4"
  status: "active"
  title: "Задача1"
  uid: "W8VQvIZ2tuYmTUAd0aHfaxgWXSp2"
 */
</script>
