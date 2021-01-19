<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr />
      <p>
        Название: <strong>{{ name }}</strong>
      </p>
      <p>
        Версия: <strong>{{ version }}</strong>
      </p>

      <button class="btn" @click="changeInfo">Изменить</button>
    </div>
  </div>
</template>

<script>
/*
composition Заменяет data, methods, computed, watch
 */

import { ref } from "vue";

export default {
  setup() {
    // первая модель
    const name = ref("Vue JS!");
    const version = ref(3);

    // то что в return будет доступно в шаблоне
    return {
      name,
      version,
    };
  },
  /*
  data() {
    return {
      name: "VueJS",
      version: 3,
    };
  },
  methods: {
    changeInfo() {
      this.name = "Vue JS!";
      this.version = 4;
    },
  },

   */
};
</script>
