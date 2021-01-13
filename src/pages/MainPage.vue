<template>
  <div class="container column">
    <div class="card card-w30">
      <ResumeBlockAdd @ResumeBlockAdd-addblock="addBlockToText" />
      <button class="btn primary mg-1 fit-width" @click="writeToDB">
        Записать изменения в базу данных
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
  <ResumeComments />
</template>

<script>
import ResumeHeader from "@comp/resume-blocks/ResumeHeader";
import ResumeAvatar from "@comp/resume-blocks/ResumeAvatar";
import ResumeSubHeader from "@comp/resume-blocks/ResumeSubHeader";
import ResumeText from "@comp/resume-blocks/ResumeText";
import ResumeComments from "@comp/comments/Сomments";
import ResumeBlockAdd from "@comp/ResumeBlockAdd";
import { NewData, readPost } from "@utils/FireBase";

// import { MainPageData } from "./MainPageData"; // временные тестовые данные

export default {
  data() {
    return {
      // blocks: MainPageData,
      blocks: [],
      localUid: null,
      textAreaValue: "",
      headerType: null,
    };
  },

  components: {
    ResumeHeader,
    ResumeAvatar,
    ResumeSubHeader,
    ResumeText,
    ResumeComments,
    ResumeBlockAdd,
  },
  computed: {
    isEmpty() {
      if (!this.blocks) return false;
      return this.blocks.length === 0;
    },
    nextBlockId() {
      if (!this.blocks) return 0;
      let i = 0;
      this.blocks.forEach((val) => {
        if (val.id > i) i = val.id + 1;
      });
      return i;
    },
  },
  methods: {
    writeToDB() {
      const puid = this.$route.params.uid;

      console.log("Записываю в базу ---", puid);

      if (!puid) return;

      NewData(puid, this.blocks);
    },
    async readFromDB(uid) {
      if (!uid) return;
      console.log("readFromDB ", uid);
      const newBlk = await readPost(uid);
      // newBlk[0].text = "Я поменял текст";
      // console.log(newBlk);
      this.blocks = newBlk;
    },
    addBlockToText(blk_to_add) {
      console.log("blk_to_add", blk_to_add);
      console.log(this.nextBlockId);
      return;
      /*
      if (!(this.textAreaValue && this.headerType)) return;
      if (!this.blocks) this.blocks = [];
      this.blocks.push({
        id: this.nextBlockId,
        blockType: this.headerType,
        text: this.textAreaValue,
      });
      this.textAreaValue = "";
      this.headerType = null;
      */
    },
  },
  created() {
    document.title = "Домашнее задание по VUE - вторая неделя";
  },
  mounted() {
    const puid = this.$route.params.uid;
    console.log("mounted ==============================");
    console.log("this.$route.params.uid", puid);

    if (puid && puid !== null) {
      console.log("------ читаю бд", puid);
      this.readFromDB(puid);
      this.localUid = puid;
    }
  },
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
