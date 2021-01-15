<template>
  <div class="container">
    <InfoPanelShow
      ref="InfoPanelShow"
      :info-panel-class="infoPanelClass"
      :info-panel-message="infoPanelMessage"
    />
  </div>

  <div class="container column">
    <div class="card card-w30">
      <ResumeBlockAdd @ResumeBlockAdd-addblock="addBlockToText" />
      <button class="btn primary mg-1 fit-width" @click="writeToDB">
        Записать изменения в базу данных
      </button>
    </div>
    <!--    цикл вывода содержимого поста -->
    <div class="card card-w70">
      <component
        :is="item.blockType"
        :text="item.text"
        v-for="item in blocks"
        :key="item.id"
      />

      <h3 v-if="isEmpty">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
    <!-- END    цикл вывода содержимого поста -->
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
import InfoPanelShow from "@comp/InfoPanelShow";
// eslint-disable-next-line no-unused-vars
import { NewData, readPost } from "@utils/FireBaseCust";

// import { MainPageData } from "./MainPageData"; // временные тестовые данные

export default {
  data() {
    return {
      // blocks: MainPageData,
      blocks: [],
      localUid: null,
      textAreaValue: "",
      headerType: null,
      infoPanelMessage: "infoPanelMessage3",
      infoPanelClass: "primary", // еще может быть danger
    };
  },

  components: {
    ResumeHeader,
    ResumeAvatar,
    ResumeSubHeader,
    ResumeText,
    ResumeComments,
    ResumeBlockAdd,
    InfoPanelShow,
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
        if (val.id >= i) i = val.id + 1;
      });
      return i;
    },
  },
  methods: {
    // обнаружена ошибка когда у меня все id==0
    revalidateBlockIDS() {
      let maxId = 0;
      let idSet = new Set();
      // вычислить новый maxId
      this.blocks.forEach((val) => {
        idSet.add(val.id);
        if (val.id >= maxId) maxId = val.id + 1;
      });
      this.blocks.forEach((val) => {
        if (idSet.has(val.id)) {
          val.id = maxId;
          idSet.add(maxId);
          maxId++;
        }
      });
    },

    async writeToDB() {
      const puid = this.$route.params.uid;

      console.log("Записываю в базу ---", puid);

      if (!puid) return;

      const res = await NewData(puid, this.blocks);
      // const res = { result: false, msg: "Ошибка записи в бд " };
      console.log(res);

      this.infoPanelClass = res.result ? "primary" : "danger";
      this.infoPanelMessage = res.result ? "Данные успешно записаны" : res.msg;
      this.$refs.InfoPanelShow.ShowInfo();
    },
    async readFromDB(uid) {
      if (!uid) return;
      console.log("readFromDB ", uid);
      const newBlk = await readPost(uid);
      // newBlk[0].text = "Я поменял текст";
      // console.log(newBlk);
      this.blocks = newBlk;
      this.revalidateBlockIDS();
    },
    addBlockToText(blk_to_add) {
      // console.log("blk_to_add", blk_to_add);
      // console.log("this.nextBlockId", this.nextBlockId);
      // console.log("this.blocks", this.blocks);

      if (!(blk_to_add.blockType && blk_to_add.text)) return;
      if (!this.blocks) this.blocks = [];
      console.log("push add");
      this.blocks.push({
        id: this.nextBlockId,
        blockType: blk_to_add.blockType,
        text: blk_to_add.text,
      });
      this.textAreaValue = "";
      this.headerType = null;
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
