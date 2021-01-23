<template>
  <div class="container">
    <h1>Login</h1>
    <div class="card card-w70">
      <div v-if="error" class="alert danger">{{ error }}</div>
      <form action="#" @submit.prevent="submit">
        <div class="form-control">
          <label for="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
          />
        </div>

        <div class="form-control">
          <label for="password">Password</label>

          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
          />
        </div>

        <button type="submit" class="btn primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import { loginUserByEmail } from "@utils/FBCustAuth";


export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
    };
  },


  methods: {
    async submit() {
      console.log("Login start");
      const result = await loginUserByEmail(
        this.form.email,
        this.form.password
      );
      console.log(result);
      if (result.result) {
        // eslint-disable-next-line

        this.$router.replace({
          name: "Home"
        });
      } else {
        this.error = result.errMsg;
      }
    },
  },
};
</script>
