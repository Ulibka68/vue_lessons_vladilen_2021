<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn" @click="add">Добавить</button>
      <!--      <button class="btn danger" @click="incrementAsync">Добавить 10</button>-->
      <button
        class="btn danger"
        @click="incrementAsyncDelay({ value: 3, delay: 500 })"
      >
        Добавить 3 incrementAsyncDelay
      </button>
    </div>
  </div>
</template>

<script>
import TheNavbar from "./TheNavbar";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: { TheNavbar },

  computed: mapGetters(["counter", "doubleCounter"]),

  methods: {
    /*
    add() {
      // this.$store.state.counter++;
      // this.$store.commit("add", 5);
      this.$store.commit("incrCounter");
    },

     */
    ...mapMutations({ add: "incrCounter" }),
    ...mapActions(["incrementAsyncDelay"]),
    /*
    incrementAsync() {
      this.$store.dispatch("incrementAsync", { value: 3 });
    },

     */
  },
};
</script>
