<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>
      <AppButton :color="oneColor" @action="active = 'one'" ref="myBtnOne"
        >One</AppButton
      >
      <AppButton :color="twoColor" @action="active = 'two'">Two</AppButton>
    </div>
    <keep-alive>
      <component :is="componentNameObj"></component>
    </keep-alive>
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
    componentNameObj: {
      get() {
        return "app-text-" + this.active;
      },
      set(value) {
        console.log("    componentNameObj", value);
      },
    },

    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
  mounted() {
    console.log(this.$refs.myBtnOne);
    this.$refs.myBtnOne.btnLog();
  },
};
</script>

<style scoped lang="css"></style>
