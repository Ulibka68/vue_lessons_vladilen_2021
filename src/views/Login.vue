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

    <router-link to="/forget">
      <button class="btn warning" @click="clickHanle2">
        Забыл пароль? clickHanle2
      </button>
    </router-link>

    <!--    custom позволяет не оборачивать в тег a-->
    <router-link to="/forget" v-slot="{ navigate }" custom>
      <button class="warning btn" @click="navigate">
        Забыл пароль v-slot={ navigate }
      </button>
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
    clickHanle2() {
      this.navigate;
    },
  },
};
</script>

<style scoped></style>
