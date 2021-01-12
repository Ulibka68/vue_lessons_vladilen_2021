<template>
  <div class="container column">
    <div class="card card-w30">
      <form>
        <div class="form-control">
          <label for="type">Тип блока</label>
          <select id="type">
            <option value="title">Заголовок</option>
            <option value="subtitle">Подзаголовок</option>
            <option value="avatar">Аватар</option>
            <option value="text">Текст</option>
          </select>
        </div>

        <div class="form-control">
          <label for="value">Значение</label>
          <textarea id="value" rows="3"></textarea>
        </div>

        <button class="btn primary">Добавить</button>
      </form>

      <button class="btn primary mg-1 fit-width" @click="writeToDB">
        Записать изменения в базу данных
      </button>
      <button class="btn primary mg-1 fit-width" @click="readFromDB(uid)">
        Прочитать данные
      </button>
    </div>
    <div class="card card-w70">
      <component
        :is="item.blockType"
        :text="item.text"
        v-for="item in blocks"
        :key="item.id"
      />

      <h3 v-if="isEmpty">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <!--  <div style="display: none">-->
  <!--  <div class="container">-->
  <!--    props.uid :-->
  <!--    {{ uid }}-->
  <!--    <p>-->
  <!--      localUid :-->
  <!--      {{ localUid }}-->
  <!--    </p>-->
  <!--  </div>-->
  <div class="container">
    <p>
      <button class="btn primary">Загрузить комментарии</button>
    </p>
    <div class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li class="list-item">
          <div>
            <p><strong>test@microsoft.com</strong></p>
            <small
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, reiciendis.</small
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
import ResumeHeader from "@comp/resume-blocks/ResumeHeader";
import ResumeAvatar from "@comp/resume-blocks/ResumeAvatar";
import ResumeSubHeader from "@comp/resume-blocks/ResumeSubHeader";
import ResumeText from "@comp/resume-blocks/ResumeText";
// eslint-disable-next-line no-unused-vars
import { MainPageData } from "./MainPageData"; // временные тестовые данные
import { NewData, readPost } from "@utils/FireBase";

export default {
  data() {
    return {
      // blocks: MainPageData,
      blocks: [],
      localUid: null,
    };
  },

  components: { ResumeHeader, ResumeAvatar, ResumeSubHeader, ResumeText },
  computed: {
    isEmpty() {
      return this.blocks.length === 0;
    },
  },
  methods: {
    writeToDB() {
      // console.log("---");
      // console.log(this.user);
      if (!this.uid) return;

      NewData(this.uid, this.blocks);
    },
    async readFromDB(uid) {
      // console.log("readFromDB ", uid);
      if (!uid) return;
      const newBlk = await readPost(uid);
      // newBlk[0].text = "Я поменял текст";
      // console.log(newBlk);
      this.blocks = newBlk;
    },
  },
  created() {
    document.title = "Домашнее задание по VUE - вторая неделя";
  },
  mounted() {
    const puid = this.$route.params.uid;
    console.log("mounted ==============================");
    console.log("this.$route.params.uid", puid);

    if (!puid) return;
    console.log("------ читаю бд", puid);
    this.readFromDB(puid);
    this.localUid = puid;
  },
  // async beforeUpdate() {
  //   console.log("beforeUpdate");
  //   const puid = this.$route.params.uid;
  //   console.log(this.localUid, puid);
  //   if (!puid && this.localUid) {
  //     // SignOut
  //     this.localUid = null;
  //     this.blocks = [];
  //   }
  //
  //   if (!puid) return;
  //
  //   if (this.localUid !== puid) {
  //     console.log("------ читаю бд", puid);
  //     this.readFromDB(puid);
  //     this.localUid = puid;
  //   }
  // },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
