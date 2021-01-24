<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar";

export default defineComponent({
  name: "App",
  components: {
    TheNavbar,
  },
});
</script>

<style></style>
