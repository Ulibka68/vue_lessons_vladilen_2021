<template>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" v-model="firstName" />
    </div>

    <button class="btn" @click="change">Изменить</button>
  </div>

  <FrameworkInfo @change-version="changeVersion" class="test-from-app">
    <template>
      <p>This is footer</p>
    </template>
  </FrameworkInfo>
</template>

<script>
/* eslint-disable no-unused-vars */
import {
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch,
} from "vue";
import FrameworkInfo from "../FrameworkInfo";
/* eslint-enable no-unused-vars */

export default {
  setup() {
    const name = ref("VueJS");
    const version = ref(3);

    const firstName = ref("");

    console.log("created");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    function changeInfo() {
      name.value = "Vue JS !";
      version.value = 42;
    }

    function changeVersion(num) {
      version.value = num;
    }

    provide("name", name);
    provide("version", version);

    return {
      change: changeInfo,
      firstName,
      changeVersion,
    };
  },
  components: { FrameworkInfo },
};
</script>

<style scoped></style>
