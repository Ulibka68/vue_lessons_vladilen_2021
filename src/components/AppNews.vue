<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return { isOpen: false };
  },
};
</script>
