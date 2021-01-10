<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpenLocal = !isOpenLocal">Открыть</button>
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
    // return { isOpenLocal: this.props.isOpen };
    return { isOpenLocal: false };
  },
  created() {
    this.isOpenLocal = this.isOpen;
  },
};
</script>
