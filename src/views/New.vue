<template>
  <div class="card">
    <div class="alert danger" v-if="erors.err.length > 0">
      <h3>Исправьте ошибки ввода</h3>
      <p v-for="(item, key) in erors.err" :key="key">{{ item }}</p>
    </div>

    <form class="card" @submit.prevent.stop="handleSubmit">
      <h1>Создать новую задачу</h1>
      <div class="form-control">
        <label for="title">Название</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>

      <div class="form-control">
        <label for="date">Дата дэдлайна</label>
        <input type="date" id="date" v-model="formData.date" />
      </div>

      <div class="form-control">
        <label for="description">Описание</label>
        <textarea id="description" v-model="formData.description"></textarea>
      </div>

      <button class="btn primary" type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { computed, reactive, ref } from "vue";

function zA(n) {
  if (n < 10) return "0" + n;
  else return n.toString();
}

// timeInMs - объект Date
function DateToString(timeInMs) {
  return (
    zA(timeInMs.getFullYear()) +
    "-" +
    zA(timeInMs.getMonth() + 1) +
    "-" +
    zA(timeInMs.getDate())
  );
}

// dateString в формате "2021-01-22"
// eslint-disable-next-line no-unused-vars
function StringToMs(dateString) {
  // console.log(dateString, typeof dateString);
  Date.parse(dateString);
}

export default {
  setup() {
    const handleSubmit = () => {
      if (formValidate()) {
        console.log(formData);
      }
    };

    // eslint-disable-next-line no-unused-vars
    const formValidate = () => {
      let result = true;
      erors.err = [];
      if (!formData.title) {
        result = false;
        erors.err.push("Введите название");
      }
      if (!formData.description) {
        result = false;
        erors.err.push("Введите описание");
      }
      if (!formData.date) {
        result = false;
        erors.err.push("Введите дату");
      } else {
        if (StringToMs(formData.date) - Date.now() < 0) {
          erors.err.push("Дата не может быть меньше текущей");
        }
      }
      return result;
    };

    // текущую дату преобразовать
    const timeInMs = new Date(Date.now());
    const stringData = DateToString(timeInMs);
    /*
    const timeInMs2 = new Date(StringToMs("2021-01-22"));
    console.log(timeInMs2.toString());

    console.log(stringData);

     */

    const erors = reactive({ err: [] });
    erors.err = [];

    const formData = reactive({
      title: "",
      date: stringData,
      description: "",
    });

    return {
      handleSubmit,
      formData,
      erors,
    };
  },
};
// Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending']
</script>
