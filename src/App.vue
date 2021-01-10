<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <hr />
    <div class="card" v-for="item in news" :key="item">
      <h3>{{ item }}</h3>
      <button class="btn" @click="isopen = !isopen">Открыть</button>
      <p v-if="isopen">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isopen: false,
      now: new Date().toLocaleDateString(),
      news: ["Джо байден выборы США", "Vue 3 работает"],
    };
  },
};
</script>

<style></style>
