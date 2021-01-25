<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>MainLayout</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavbar from "@/components/TheNavbar.vue";

export default defineComponent({
  name: "MainLayout",
  components: { TheNavbar },
});
</script>

<style scoped></style>
