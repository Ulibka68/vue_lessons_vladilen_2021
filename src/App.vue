<template>
  <div class="container pt-1">
    <div class="card">
      <h2>SLOT</h2>
    </div>
    <AppList>
      <template #default="slotProps"
        ><span style="color: #c25205">Item : {{ slotProps.iter }}</span>
        &nbsp;
        <strong>{{ slotProps.idx + 1 }}</strong>
      </template>
    </AppList>

    <AppBlock>
      <p>Children для нового блока</p>
      <template v-slot:header>
        <h3>Заголовок</h3>
      </template>

      <!--      # - это сокращение от v-slot -->
      <template #footer> Footer text</template>
    </AppBlock>
  </div>
</template>

<script>
import AppBlock from "@/components/AppBlock";
import AppList from "@/components/AppList";
export default {
  name: "App",
  data() {
    return {
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
    AppBlock,
    AppList,
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
  provide() {
    return {
      titleProvide: "Список всех новостей",
      news: this.news,
    };
  },
};
</script>

<style scoped lang="css"></style>
