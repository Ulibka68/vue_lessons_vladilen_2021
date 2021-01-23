<template>
  <div class="card" v-if="nonUser">
    <h3 class="text-white center">
      Задачи с id = <strong>Tут {{ taskByID.key }}</strong> нет.
    </h3>
  </div>
  <div class="card" v-else>
    <h2>{{ taskByID.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="taskByID.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ taskByID.date }}</p>
    <p><strong>Описание</strong>: {{ taskByID.description }}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { computed } from "vue";
import { useStore } from "vuex";

// composition Заменяет data, methods, computed, watch

export default {
  components: { AppStatus },
  props: { id: String },
  setup(props) {
    console.log("Task props", props);

    const store = useStore();

    const taskByID = computed(() => store.getters["Tasks/taskByID"](props.id));
    const currentUserUid = computed(() => store.getters["Auth/currentUserUid"]);
    console.log(taskByID.value.uid, currentUserUid.value);
    const nonUser = () => taskByID.value.uid != currentUserUid.value;

    return {
      taskListLength: computed(() => store.getters["Tasks/taskListLength"]),
      taskList: computed(() => store.getters["Tasks/taskList"]),
      countUsers: computed(() => store.getters["Auth/getUserListLength"]),
      currentUserUid,
      getUserByUid: computed(() => (uid) =>
        store.getters["Auth/getUserByUid"](uid)
      ),
      taskByID,
      nonUser,
    };
  },
};
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

<style scoped></style>
