<template>
  <button class="btn" :class="color" @click="$emit('action')">
    {{ text }}
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      },
    },
    text: {
      type: String,
      default: "",
    },
  },
  emits: ["action"],
};
</script>

<style scoped></style>
