<template>
  <h1>Test</h1>
  <button class="btn" @click="handleClick">firebase.auth().currentUser</button>
</template>

<script>
import firebase from "firebase";

export default {
  name: "TestBtn",
  methods: {
    handleClick() {
      const resUser = firebase.auth().currentUser;
      console.log(resUser);
    },
  },
};
</script>

<style scoped></style>
