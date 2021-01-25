<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Auth from "@/views/Auth.vue";

export default defineComponent({
  name: "AuthLayout",
  // eslint-disable-next-line vue/no-unused-components
  components: { Auth },
});
</script>
