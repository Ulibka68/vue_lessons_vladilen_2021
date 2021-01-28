<template>
  <div class="about">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const title = ref("Тест");
    return {
      title
    };
  }
});
</script>
