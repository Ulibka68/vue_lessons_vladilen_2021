<template>
  <div class="avatar">
    <img :src="srcUrl" />
  </div>
</template>

<script>
export default {
  name: "ResumeAvatar",
  props: {
    srcUrl: { type: String, required: true },
  },
};
</script>

<style scoped></style>
