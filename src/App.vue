<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <AppNews v-for="item in news" :key="item" :title="item" />
    <hr />
  </div>
</template>

<script>
import AppNews from "@/components/AppNews";

export default {
  name: "App",
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: ["Джо байден выборы США", "Vue 3 работает"],
    };
  },
  components: {
    // "app-news": AppNews,
    AppNews,
  },
};
</script>

<style></style>
