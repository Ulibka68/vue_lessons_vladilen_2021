<template>
  <div class="container">
    <div class="card">
      <form class="card" @submit.prevent="createPerson">
        <h2>Работа с базой данных</h2>
        <div class="form-control">
          <label for="name"> Введите имя </label>
          <input type="text" id="name" v-model.trim="name" />
        </div>
        <button class="btn primary" :disabled="!name">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "" };
  },
  methods: {
    createPerson() {
      console.log(this.name);
    },
  },
};
</script>

<style></style>
