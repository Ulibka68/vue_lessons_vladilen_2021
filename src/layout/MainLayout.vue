<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <AppMessage />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import TheNavbar from "@/components/TheNavbar.vue";
    import AppMessage from "@/components/ui/AppMessage.vue";

    export default defineComponent({
        name: "MainLayout",
        components: { TheNavbar, AppMessage },
    });
</script>

<style scoped></style>
