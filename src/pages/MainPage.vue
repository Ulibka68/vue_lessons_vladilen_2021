<template>
  <div class="container column">
    <form class="card card-w30">
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

export default {
  data() {
    return {
      blocks: [
        {
          id: 1,
          blockType: "ResumeHeader",
          text: "Резюме Nickname",
        },
        {
          id: 2,
          blockType: "ResumeAvatar",
          text:
            "https://cdn.dribbble.com/users/5592443/screenshots/14279501/drbl_pop_r_m_rick_4x.png",
        },
        {
          id: 3,
          blockType: "ResumeSubHeader",
          text: "Опыт работы",
        },
        {
          id: 4,
          blockType: "ResumeText",
          text:
            "главный герой американского мультсериала «Рик и Морти», гениальный\n" +
            "        учёный, изобретатель, атеист (хотя в некоторых сериях он даже молится\n" +
            "        Богу, однако, каждый раз после чудесного спасения ссылается на удачу и\n" +
            "        вновь отвергает его существование), алкоголик, социопат, дедушка Морти.\n" +
            "        На момент начала третьего сезона ему 70 лет[1]. Рик боится пиратов, а\n" +
            '        его главной слабостью является некий - "Санчезиум". Исходя из того, что\n' +
            "      существует неограниченное количество вселенных, существует\n" +
            "      неограниченное количество Риков, герой сериала предположительно\n" +
            "      принадлежит к измерению С-137. В серии комикcов Рик относится к\n" +
            "      измерению C-132, а в игре «Pocket Mortys» — к измерению C-123[2].\n" +
            "      Прототипом Рика Санчеза является Эмметт Браун, герой кинотрилогии «Назад\n" +
            "      в будущее»[3].",
        },
      ],
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
