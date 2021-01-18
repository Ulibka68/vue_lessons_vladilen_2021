<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.state.counter }}</h2>
      <button class="btn" @click="increment">Добавить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  methods: {
    increment() {
      this.$store.state.counter++;
    },
  },
};
</script>
