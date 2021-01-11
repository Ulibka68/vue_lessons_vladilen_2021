<template>
  <div class="container">
    <form class="card" @submit.prevent="formSubmit">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input
          v-model.trim="name"
          type="text"
          id="name"
          placeholder="Введи имя"
        />
        <small v-if="errors.name">{{ errors.name }}</small>
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" value="20" />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" /> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" /> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" /> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" /> Vue Router</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "", errors: { name: null } };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(event) {
      if (this.isValid()) {
        console.log(this.name);
      }
    },
    isValid() {
      if (!this.name) {
        this.errors.name = "Введите имя";
        return false;
      }
      this.errors.name = null;
      return true;
    },
  },
};
</script>

<style scoped>
.form-control small {
  color: #c25205;
}
.form-control.invalid input {
  border-color: red;
}
</style>
