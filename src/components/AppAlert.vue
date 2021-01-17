<template>
  <div class="alert" :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button v-if="closable" @click="$emit('close')" class="btn" :class="type">
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return ["primary", "danger", "warning"].includes(val);
      },
    },
  },
  emits: ["close"],
};
</script>

<style scoped></style>
