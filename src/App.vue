<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
    />
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
      news: [
        { title: "Джо байден выборы США", id: 1, isOpen: false },
        { title: "Vue 3 работает", id: 2, isOpen: false },
      ],
    };
  },
  components: {
    // "app-news": AppNews,
    AppNews,
  },
};
</script>

<style></style>
