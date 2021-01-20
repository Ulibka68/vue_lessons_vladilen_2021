<template>
  <div class="alert" :class="type" @click="$emit('close')">
    <p class="alert-title">{{ title }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: ["title", "type"],
  emits: ["close"],
};
</script>

<style scoped></style>
