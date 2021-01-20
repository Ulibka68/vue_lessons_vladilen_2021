<template>
  <AppAlert
    v-if="alert"
    @close="close"
    title="Работа с Composition"
    type="danger"
  />

  <div class="container with-nav">
    <div class="card">
      <h1>HOME</h1>
      <hr />

      <div class="form-control">
        <input type="text" ref="textInput" />
      </div>

      <button class="btn" @click="change">Изменить</button>
      <button class="btn danger" @click="toggle">Открыть Alert</button>
    </div>

    <FrameworkInfo class="test-attr-from-app" @change-ver="changeVersions">
      <template #footer>
        <p>Вася footer</p>
      </template>
    </FrameworkInfo>
  </div>
</template>

<script>
/*
composition Заменяет data, methods, computed, watch
 */

// Хуки
// https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks

/* eslint-disable no-unused-vars */
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  provide,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
} from "vue";
import FrameworkInfo from "@/FrameworkInfo";
/* eslint-enable no-unused-vars */
import AppAlert from "@/components/AppAlert";
import { useAlert } from "@/use/alert";

export default {
  name: "HomePage",

  components: { FrameworkInfo, AppAlert },
  setup() {
    // reactive - proxy для работы с объектами
    const framework = reactive({
      name: "Vue JS!",
      version: 3,
    });

    function changeInfo() {
      framework.name = "VUE JS changed";
    }

    function changeVersions(val) {
      console.log("changeVersions:", val);
      framework.version = val;
    }

    provide("framework", framework);

    onMounted(() => {
      console.log("Mounted");
    });

    // код для alert
    const { alert, toggle, close } = useAlert();

    // то что в return будет доступно в шаблоне
    return {
      // ...toRefs(framework), // на выходе name + version в реактивном виде
      change: changeInfo,
      changeVersions,
      // код для alert
      alert,
      toggle,
      close,
    };
  },
};
</script>
