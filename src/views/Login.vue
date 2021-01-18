<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <button class="btn warning">Забыл пароль?</button>

    <!--    <br />
    <a href="/forget">Забыл пароль</a><br />
    <router-link to="/forget">Переход на Forget без перезагрузки</router-link>-->

    <router-link to="/forget" class="btn warning"
      >Забыл пароль - router</router-link
    >
    <!--    добавляем слот к router link-->
    <router-link to="/forget">
      <button class="warning btn">Забыл пароль button slot</button>
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.email !== "" && this.password !== "";
    },
  },
  methods: {
    submit() {
      if (this.isValid) {
        // login
      }
    },
  },
};
</script>

<style scoped></style>
