<template>
  <h2>
    {{ headerText }}
  </h2>
</template>

<script>
export default {
  name: "ResumeSubHeader",
  props: {
    headerText: { type: String, required: true },
  },
};
</script>

<style scoped></style>
