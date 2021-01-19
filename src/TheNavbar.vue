<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>
    <button class="btn" @click="addFour({ value: 4 })">Добавить 4</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["counter"]),
    //  эта запись аналогична\
    //  counter () {rewturn $store.getters.counter}
  },
  methods: {
    ...mapMutations({ addFour: "add" }),
  },
};
</script>
