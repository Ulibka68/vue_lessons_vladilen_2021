<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isOpenLocal ? "Закрыть" : "Открыть" }}
    </button>
    <!--    <button class="btn">Открыть</button>-->
    <p v-if="isOpenLocal">Lorem ipsum dolor sit amet.</p>
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
      // eslint-disable-next-line no-unused-vars
      // validator(value) {
      //   return true;
      // },
    },
  },
  data() {
    return {
      // isOpenLocal: false,
      isOpenLocal: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isOpenLocal = !this.isOpenLocal;
      this.isOpenLocal && this.$emit("open-news", 55, 66);
    },
  },
};
</script>
