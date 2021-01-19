<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "FrameworkInfo",
  props: ["name", "version"],
  computed: {},
};
</script>

<style scoped></style>
