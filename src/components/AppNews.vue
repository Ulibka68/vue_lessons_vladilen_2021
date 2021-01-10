<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <!--    <button class="btn" @click="isOpen = !isOpen">Открыть</button>-->
    <button class="btn">Открыть</button>
    <p v-if="isOpen">Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script>
export default {
  // props: ["title"],
  props: {
    title: { type: String, required: true },
    id: Number, // Proxy, Array, Promise
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true;
      },
    },
  },
  data() {
    // return { isOpen: false };
  },
};
</script>
