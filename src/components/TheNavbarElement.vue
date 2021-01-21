<template>
  <li>
    <router-link :to="path">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  name: "TheNavbarElement",
  props: ["path", "title"],
};
</script>

<style scoped></style>
