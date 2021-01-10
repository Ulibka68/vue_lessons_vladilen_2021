<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span
        >Открыто {{ openRate }} &nbsp;&nbsp; | Прочитано:
        <strong>{{ readRate }}</strong></span
      >
    </div>

    <AppNews
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      v-on:open-news="recieveEvent"
      v-on:read-news="readNews"
      v-on:unmark="unmark"
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
      readRate: 0,
      news: [
        {
          title: "Джо байден выборы США",
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        { title: "Vue 3 работает", id: 2, isOpen: true, wasRead: false },
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

    readNews(id) {
      this.readRate++;

      const idx = this.news.findIndex((item) => item.id === id);
      this.news[idx].wasRead = true;
    },
    unmark(id) {
      const news = this.news.find((itm) => itm.id === id);
      news.wasRead = false;
      this.readRate--;
    },
  },
};
</script>

<style></style>
