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

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  inject: ["changeCurrentUserDispatch"],
  emits: ["userloged"],
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          const logedUser = {
            displayName: data.user.displayName,
            email: data.user.email,
            emailVerified: data.user.emailVerified,
            uid: data.user.uid,
          };

          this.changeCurrentUserDispatch(logedUser);

          // this.$router.replace({ name: "resume" });
          this.$router.replace({
            name: "resume",
            params: { uid: data.user.uid },
          });

          // this.$emit("userloged", logedUser);

          // console.log("data.user.displayName : ", data.user.displayName);
          // console.log("data.user.email : ", data.user.email);
          // console.log("data.user.emailVerified :", data.user.emailVerified);
          // console.log("data.user", data.user);
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
