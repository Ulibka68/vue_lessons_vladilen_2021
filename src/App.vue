<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто {{ openRate }}</span>
    </div>

    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      v-on:open-news="recieveEvent"
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
      openRate: 0,
      news: [
        { title: "Джо байден выборы США", id: 1, isOpen: false },
        { title: "Vue 3 работает", id: 2, isOpen: true },
      ],
    };
  },
  components: {
    // "app-news": AppNews,
    AppNews,
  },
  methods: {
    recieveEvent(...data) {
      this.openRate++;
      console.log(data);
    },
  },
};
</script>

<style></style>
