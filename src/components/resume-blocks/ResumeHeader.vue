<template>
  <h1>
    {{ headerText }}
  </h1>
</template>

<script>
export default {
  name: "ResumeHeader",
  props: {
    headerText: { type: String, required: true },
  },
};
</script>

<style scoped></style>
