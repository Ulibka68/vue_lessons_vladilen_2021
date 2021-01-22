<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import { fbAppAuth, listenersCallbacks } from "@/utils/FBCustInit";

export default {
  components: {
    TheNavbar,
  },
  methods: {
    hearEvent() {
      fbAppAuth.onAuthStateChanged((user) => {
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
      if (fbAppAuth) fbAppAuth.signOut();
      //  обнуление свойств словит hearEvent
      this.$router.replace({ name: "Home" });
    },
  },

  mounted() {
    if (fbAppAuth) this.hearEvent();
    else {
      listenersCallbacks.push(this.hearEvent.bind(this));
    }
  },
};
</script>

<style></style>
