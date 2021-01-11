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

    <AppPeopleList :people="people" @loadPeopleList="loadPeopleListHandler" />
  </div>
</template>

<script>
import AppPeopleList from "@/AppPeopleList";
export default {
  data() {
    return { name: "", people: [] };
  },
  methods: {
    async createPerson() {
      console.log(this.name);
      const firebasePostURL =
        "https://vue-vladilen-4c695-default-rtdb.firebaseio.com/people.json";
      const responce = await fetch(firebasePostURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: this.name }),
      });
      const firebaseData = await responce.json();
      console.log(firebaseData);
      this.name = "";
    },
    loadPeopleListHandler() {},
  },
  components: { AppPeopleList },
};
</script>

<style></style>
