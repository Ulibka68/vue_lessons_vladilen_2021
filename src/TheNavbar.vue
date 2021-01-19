<template>
  <header class="navbar">
    <strong
      >Счетчик {{ counter }} - {{ counterOldStyle }} - [{{
        doubleCounterGlob
      }}]</strong
    >
    <button class="btn" @click="addFour({ value: 4 })">Добавить 4</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("count", ["counter", "doubleCounterGlob"]),
    //  эта запись аналогична\
    //  counter () {rewturn $store.getters.counter}
    counterOldStyle() {
      return this.$store.getters["count/counter"];
    },
  },
  methods: {
    ...mapMutations({ addFour: "count/add" }),
  },
};
</script>
