<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>
      <AppButton
        :color="active === 'one' ? 'primary' : ''"
        @action="active = 'one'"
        >One</AppButton
      >
      <AppButton
        :color="active === 'two' ? 'primary' : ''"
        @action="active = 'two'"
        >Two</AppButton
      >
    </div>

    <component :is="componentName"></component>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import AppTextOne from "@/components/AppTextOne";
import AppTextTwo from "@/components/AppTextTwo";
export default {
  name: "App",
  data() {
    return {
      active: "one", // two
    };
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo,
  },
  methods: {},
  computed: {
    componentName() {
      switch (this.active) {
        case "one":
          return "AppTextOne";
      }

      return "AppTextTwo";
    },
  },
};
</script>

<style scoped lang="css"></style>
