<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "ResumeText",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped></style>
