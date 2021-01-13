<template>
  <form>
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="headerType">
        <option value="ResumeHeader">Заголовок</option>
        <option value="ResumeSubHeader">Подзаголовок</option>
        <option value="ResumeAvatar">Аватар</option>
        <option value="ResumeText">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model="textAreaValue"></textarea>
    </div>

    <button
      :disabled="!(headerType && textAreaValue)"
      class="btn primary"
      @click.prevent.stop="addBlockToText"
    >
      Добавить
    </button>
  </form>
</template>

<script>
export default {
  name: "ResumeBlockAdd",
  data() {
    return {
      textAreaValue: "",
      headerType: null,
      loggin: false,
    };
  },
  emits: ["ResumeBlockAdd-addblock"],
  methods: {
    logs(...args) {
      if (!this.loggin) return;
      console.log(args);
    },

    addBlockToText() {
      if (!(this.textAreaValue && this.headerType)) return;

      this.logs(this.textAreaValue, this.headerType);
      this.$emit("ResumeBlockAdd-addblock", {
        blockType: this.headerType,
        text: this.textAreaValue,
      });

      this.textAreaValue = "";
      this.headerType = null;
    },
  },
};
</script>

<style scoped></style>
