<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "ResumeHeader",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped></style>
