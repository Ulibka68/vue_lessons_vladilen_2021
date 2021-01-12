<template>
  <h1>Test</h1>
  <button class="btn" @click="handleClick">firebase.auth().currentUser</button>
</template>

<script>
import { postCommentsToDB } from "@utils/FireBase";

export default {
  name: "TestBtn",
  methods: {
    handleClick() {
      postCommentsToDB();
    },
  },
};
</script>

<style scoped></style>
