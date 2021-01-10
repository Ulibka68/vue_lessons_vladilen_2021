<template>
  <button class="btn" :class="color" @click="$emit('action')">
    {{ text }}
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
      required: true,
    },
  },
  emits: ["action"],
};
</script>

<style scoped></style>
