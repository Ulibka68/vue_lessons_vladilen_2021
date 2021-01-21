<template>
  <div class="card">
    <h1>Test</h1>
    <!--    <p>currentUser {{ currentUser }}</p>-->
    <p>{{ count }}</p>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { computed } from "vue";
import { useStore } from "vuex";

/* eslint-enable no-unused-vars */

// eslint-disable-next-line no-unused-vars
function returnGetters(store, path, gettersNameArray) {
  return gettersNameArray.map((getterName) => {
    // "Counter/counter"

    return { [getterName]: store.getters[path + "/" + getterName] };
    // return { [getterName]: computed(store.getters[path + "/" + getterName]) };
  });
}

// composition Заменяет data, methods, computed, watch
export default {
  name: "Test",
  setup() {
    const store = useStore();

    function returnGetters(path, gettersNameArray) {
      return gettersNameArray.map((getterName) => {
        // "Counter/counter"

        return { [getterName]: store.getters[path + "/" + getterName] };
        // return {
        //   [getterName]: computed(store.getters[path + "/" + getterName]),
        // };
      });
    }

    // console.log("Counter/counter :", store.getters["Counter/counter"]);
    // store.commit("Counter/incrCounter");

    const c1 = computed.call(this, store.getters["Auth/currentUser"]);
    // const c1 = store.getters["Counter/counter"];
    console.log("c1--", c1);

    const getArr = returnGetters("Auth", [
      "currentUser",
      "currentUserUid",
      "isLogged",
    ]);

    console.log(getArr);

    // const getters = getArr.reduce((acc, val) => acc, {});

    // const c2 = computed(getArr[0]);
    // console.log("c2++", c2);

    return {
      // ...mapGetters("Auth", ["CurrentUser", "currentUserUid", "isLogged"]),
      count: computed(() => store.getters["Counter/counter"]),
    };
  },
};
</script>

<style scoped></style>
