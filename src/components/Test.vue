<template>
  <div class="card">
    <h1>Test</h1>
    <p>currentUser {{ currentUser }}</p>
    <p>{{ count }}</p>
    <button class="btn" @click="setCurrentUserName('Василий Пупкин')">
      Изменить USER
    </button>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { computed } from "vue";
import { useStore } from "vuex";

/* eslint-enable no-unused-vars */

// composition Заменяет data, methods, computed, watch
export default {
  name: "Test",
  setup() {
    const store = useStore();

    const increment = () => store.commit("Counter/incrCounter");
    increment();

    return {
      count: computed(() => store.getters["Counter/counter"]),
      currentUser: computed(() => store.getters["Auth/currentUser"]),

      // access a mutation
      // increment: () => store.commit('Counter/incrCounter'),
      increment,
      setCurrentUserName: (newUserName) =>
        store.commit("Auth/setCurrentUserName", newUserName),

      // access an action
      asyncIncrement: () => store.dispatch("asyncIncrement"),
    };
  },
};
</script>

<style scoped></style>
