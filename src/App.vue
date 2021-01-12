<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="user.uid">
        <router-link
          :to="{
            name: 'resume',
            params: { uid: user.uid },
          }"
        >
          Резюме
        </router-link>
      </li>

      <li v-if="!user.displayName">
        <router-link to="/login">login</router-link>
      </li>
      <li v-if="!user.displayName">
        <router-link to="/register">register</router-link>
      </li>
      <li v-if="user.displayName">
        <button class="btn" @click="handleLogout">Logout</button>
      </li>
      <li>
        <router-link to="/testbtn">testbtn</router-link>
      </li>
    </ul>
    <div class="displayUser">{{ user.displayName }}</div>
  </nav>
  <!--  место где будет идти рендер пути -->
  <div class="card">
    <!--    <router-view @userloged="handleLogin"></router-view>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import MainPage from "@/pages/MainPage";
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "App",
  data() {
    return {
      user: { displayName: "", email: "", emailVerified: false, uid: null },
      changeCurrentUserDispatch: (newUser) => {
        this.changeCurrentUser(newUser);
      },
    };
  },
  provide() {
    return {
      changeCurrentUserDispatch: (newUser) => {
        this.changeCurrentUser(newUser);
      },
      user: this.user,
    };
  },
  computed: {
    isLogged() {
      console.log("this.uid : ", this.user.uid);
      return Boolean(this.user.uid);
    },
  },
  components: {
    // MainPage,
  },
  methods: {
    changeCurrentUser(user) {
      // this.user = newUser;
      this.user.displayName = user.displayName;
      this.user.email = user.email;
      this.user.emailVerified = user.emailVerified;
      this.user.uid = user.uid;
    },
    handleLogin(user) {
      console.log("handleLogin :", user);
      this.user.displayName = user.displayName;
      this.user.email = user.email;
      this.user.emailVerified = user.emailVerified;
      this.user.uid = user.uid;
    },
    hearEvent() {
      firebase.auth().onAuthStateChanged((user) => {
        // console.log("hearEvent : ", user);
        if (user) {
          const { displayName, email, emailVerified, uid } = user;
          this.changeCurrentUser({ displayName, email, emailVerified, uid });
        } else {
          this.changeCurrentUser({
            displayName: "",
            email: "",
            emailVerified: false,
            uid: null,
          });
        }
      });
    },
    handleLogout() {
      firebase.auth().signOut();
      //  обнуление свойств словит hearEvent
      this.$router.replace({ name: "Home" });
    },
  },

  mounted() {
    this.hearEvent();
  },
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
.displayUser {
  display: inline-block;
  color: #effcf6;
  font-weight: bold;
  font-size: 1.5em;
}
</style>
