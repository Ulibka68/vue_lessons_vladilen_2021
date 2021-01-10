<template>
  <hr />
  <ul>
    <li v-for="item in news" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "AppNewsList",
  props: ["news"],
};
</script>

<style scoped></style>
