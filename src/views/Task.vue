<template>
  <h3 class="text-white center" v-if="nonUser">
    Задачи с id = <strong>{{ taskByID.key }}</strong> Tут нет.
  </h3>

  <div class="card" v-else>
    <h2>{{ taskByID.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="taskByID.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ taskByID.date }}</p>
    <p><strong>Описание</strong>: {{ taskByID.description }}</p>
    <div>
      <!--      / Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending']-->
      <button class="btn" @click.prevent.stop="changeStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click.prevent.stop="changeStatus('done')">
        Завершить
      </button>
      <button
        class="btn danger"
        @click.prevent.stop="changeStatus('cancelled')"
      >
        Отменить
      </button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// composition Заменяет data, methods, computed, watch

export default {
  components: { AppStatus },
  props: ["id"],
  setup(props) {
    console.log("Task props", props);

    const store = useStore();
    const router = useRouter();

    const taskByID = store.getters["Tasks/taskByID"](props.id);
    // console.log("taskByID: ", taskByID);
    // console.log("taskByID.uid: ", taskByID.uid);
    const currentUserUid = store.getters["Auth/currentUserUid"];
    // console.log("currentUserUid ", currentUserUid);

    const nonUser = taskByID.uid != currentUserUid;
    // console.log(nonUser);

    const changeStatus = async (newStatus) => {
      await store.dispatch("Tasks/replaceTaskStatusFB", {
        key: props.id,
        newStatus,
      });
      router.push({ name: "tasks" });
    };

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
      changeStatus,
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
