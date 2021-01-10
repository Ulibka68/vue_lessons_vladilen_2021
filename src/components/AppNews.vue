<template>
  <div class="card">
    <h3>{{ item }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {
  data() {
    return { item: "Items string", isOpen: false };
  },
};
</script>
