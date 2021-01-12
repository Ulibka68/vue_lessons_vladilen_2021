<template>
  <div class="avatar">
    <img :src="text" />
  </div>
</template>

<script>
export default {
  name: "ResumeAvatar",
  props: {
    text: { type: String, required: true },
  },
};
</script>

<style scoped></style>
