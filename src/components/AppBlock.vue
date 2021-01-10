<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default"> No text выводится если нет children </slot>
    <div v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBlock",
};
</script>

<style scoped></style>
