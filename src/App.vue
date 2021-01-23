<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style></style>
