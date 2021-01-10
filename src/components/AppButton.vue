<template>
  <button class="btn" :class="color" @click="$emit('action')">
    {{ text }}
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
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
  methods: {
    btnLog() {
      console.log("AppButton : ", this.color);
    },
  },
};
</script>

<style scoped></style>
