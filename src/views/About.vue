<template>
  <div class="about">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { myUseStore } from "@/store";
import { MutationTypes } from "@/store/modules/auth";
// import { main } from "@/ts-learn/ts1";
// import { main } from "@/ts-learn/ts4-strEnum";
/* eslint-enable @typescript-eslint/no-unused-vars */

export default defineComponent({
  name: "Home",
  setup() {
    const title = ref("Тест");
    // main();

    const store = myUseStore();
    store.commit(MutationTypes.SET_USER_AUTHENTICATED, undefined);

    return {
      title
    };
  }
});
</script>
