<template>
  <h1>Dashboard</h1>
  <p>Сюда можно попасть авторизовавшись</p>
  <button class="btn" @click="changeUser">Изменить USER</button>
</template>

<script>
export default {
  name: "Dashboard",
  inject: ["changeCurrentUserDispatch", "user"],
  methods: {
    changeUser() {
      console.log("changeUser click");
      console.log(this.changeCurrentUserDispatch);
      this.changeCurrentUserDispatch({
        displayName: "Петя",
        email: "",
        emailVerified: false,
      });
    },
  },
  mounted() {
    // console.log("Dashboard :", this.user);
    if (!this.user.displayName) {
      this.$router.replace({ name: "Home" });
    }
  },
};
</script>

<style scoped></style>
