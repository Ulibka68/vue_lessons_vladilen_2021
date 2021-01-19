<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}</strong> - ({{ doubleVer }})
    </p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "FrameworkInfo",
  props: ["name", "version"],
  setup(props) {
    const doubleVer = computed(() => props.version * 2);
    return {
      doubleVer,
    };
  },
};
</script>

<style scoped></style>
