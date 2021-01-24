<template>
  <div class="card">
    <h1>{{ title }}</h1>

    <button class="btn">Открыть пользователей</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/*
export default defineComponent({
  data() {
    return {
      title: "Как Vue работает с TypeScript?",
    };
  },
});

 */

export default defineComponent({
  setup() {
    return {
      title: "Как Vue работает с TypeScript?",
    };
  },
});
</script>
