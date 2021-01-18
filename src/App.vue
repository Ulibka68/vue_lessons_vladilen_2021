<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.getters.counter }}</h2>
      <button class="btn" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  methods: {
    add() {
      // this.$store.state.counter++;
      // this.$store.commit("add", 5);
      this.$store.commit("incrCounter");
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync", { value: 3 });
    },
  },
};
</script>
