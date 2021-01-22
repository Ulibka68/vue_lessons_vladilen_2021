<template>
  <div class="container">
    <h1>Зарегистрировать нового пользователя</h1>

    <div class="card card-w70">
      <div v-if="error" class="alert danger">{{ error }}</div>
      <form action="#" @submit.prevent="submit">
        <div class="form-control">
          <label for="name">Name</label>
          <input
            id="name"
            type="name"
            name="name"
            value
            required
            autofocus
            v-model="form.name"
          />
        </div>
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
            name="password"
            value
            required
            autofocus
            v-model="form.password"
          />
        </div>

        <button type="submit" class="btn primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="js">
import { mapMutations } from 'vuex'
import { registerNewUser } from "@utils/FBCustAuth";


export default {
  name: "RegisterNewUser",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },

  methods: {
    async submit() {
      try {
        const logedUser = await registerNewUser(
          this.form.email,
          this.form.password,
          this.form.name
        );

        // eslint-disable-next-line
        // console.log(this)
        this['Auth/setCurrentUser'](logedUser);


        // this.$router.replace({
        //   name: "resume",
        //   params: { uid: logedUser.uid },
        // });
        this.$router.replace({
          name: "Home"
        });


      } catch (err) {
        this.error = err.message;
      }
    },
    ...mapMutations(['Auth/setCurrentUser'])
  },
};
</script>
