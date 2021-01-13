<template>
  <div class="container">
    <p>
      <button
        :disabled="commentsLoaded"
        class="btn primary"
        @click="loadComments"
      >
        Загрузить комментарии
      </button>
    </p>
    <div class="card" v-if="commentsLoaded">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item" v-for="itm in comments" :key="itm.id">
          <div>
            <p>
              <strong>{{ itm.email }}</strong>
            </p>
            <small>{{ itm.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div v-if="loading" class="loader"></div>
  </div>
</template>

<script>
import { readComments } from "@utils/FireBase";

export default {
  name: "Сomments",
  data() {
    return {
      comments: [],
      loading: false,
    };
  },
  computed: {
    commentsLoaded() {
      return this.comments && this.comments.length > 0;
    },
  },
  methods: {
    async loadComments() {
      console.log("read Comments ");
      this.loading = true;
      const newBlk = await readComments();
      this.loading = false;
      if (newBlk) {
        newBlk.splice(0, 1);
        // console.log(newBlk[0]);
        // console.log(Object.keys(newBlk));
        // console.log(newBlk);
        this.comments = newBlk;
      }
    },
  },
  mounted() {
    // const puid = this.$route.params.uid;
    // console.log("комментарии ==============================", puid);
  },
};
</script>

<style scoped></style>
