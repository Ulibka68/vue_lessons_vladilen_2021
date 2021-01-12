<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">login</router-link></li>
      <li><router-link to="/register">register</router-link></li>
      <li><router-link to="/dashboard">dashboard</router-link></li>
    </ul>
  </nav>
  <!--  место где будет идти рендер пути -->
  <div class="card">
    <router-view></router-view>
  </div>
</template>

<script>
// import MainPage from "@/pages/MainPage";
export default {
  name: "App",
  data() {
    return {
      user: { displayName: "", email: "", emailVerified: false },
      changeCurrentUserDispatch: (newUser) => {
        this.changeCurrentUser(newUser);
      },
    };
  },
  components: {
    // MainPage,
  },
  methods: {
    changeCurrentUser(newUser) {
      // newuser: { displayName: "", email: "", emailVerified: false },
      this.user = newUser;
    },
  },
  // mounted() {
  //   console.log(this.$router);
  // },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  /* flex-direction: column; */
}
.router-link-active {
  border-bottom: 1px solid #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
