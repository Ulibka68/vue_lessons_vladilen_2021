<template>
  <li>
    <router-link :to="path">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "TheNavbarElement",
  props: ["path", "title"],
  mounted() {
    console.log(this.path);
  },
};
</script>

<style scoped></style>
