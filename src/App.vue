<template>
  <div class="container">
    <AppAlert :alert="alert" @close="alert = null" />

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

    <AppPeopleList
      :people="people"
      @loadPeopleList="loadPeopleListHandler"
      @remove="removePerson"
    />
  </div>
</template>

<script>
import AppPeopleList from "@/AppPeopleList";
import axios from "axios";
import AppAlert from "@/AppAlert";
const firebasePostURL =
  "https://vue-vladilen-4c695-default-rtdb.firebaseio.com/people.json";
const firebasePostURLBase =
  "https://vue-vladilen-4c695-default-rtdb.firebaseio.com/people/";

export default {
  data() {
    return { name: "", people: [], alert: null };
  },
  methods: {
    async createPerson() {
      console.log(this.name);

      const responce = await fetch(firebasePostURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: this.name }),
      });
      const firebaseData = await responce.json();
      // console.log(firebaseData);
      this.people.push({ id: firebaseData.name, firstName: this.name });
      this.name = "";
    },
    async loadPeopleListHandler() {
      try {
        const { data } = await axios.get(firebasePostURL);

        if (!data) {
          throw new Error("Список людей пуст");
        }

        this.people = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
      } catch (e) {
        console.log(e);
        this.alert = { type: "danger", title: "Ошибка", text: e.message };
      }
    },
    async removePerson(id) {
      await axios.delete(firebasePostURLBase + `${id}.json`);
      const idx = this.people.findIndex((person) => person.id === id);
      this.people.splice(idx, 1);
    },
  },
  mounted() {
    this.loadPeopleListHandler();
  },
  components: { AppPeopleList, AppAlert },
};
</script>

<style></style>
