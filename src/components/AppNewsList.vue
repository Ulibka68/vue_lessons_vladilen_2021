<template>
  <hr />
  <h4>{{ titleProvide }}</h4>
  <ul>
    <li v-for="item in news" :key="item.id">
      {{ item.title }}
      <span v-if="item.wasRead">&nbsp;!!!</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppNewsList",
  inject: ["titleProvide", "news"],
};
</script>

<style scoped></style>
