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

      <button class="btn primary mg-1 fit-width">
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
import { MainPageData } from "./MainPageData"; // временные тестовые данные

export default {
  data() {
    return {
      blocks: MainPageData,
    };
  },
  created() {
    document.title = "Домашнее задание по VUE - вторая неделя";
  },
  components: { ResumeHeader, ResumeAvatar, ResumeSubHeader, ResumeText },
  computed: {
    isEmpty() {
      return this.blocks.length === 0;
    },
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
