<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr />
      <p>
        Название: <strong>{{ framework2.name2 }}</strong>
      </p>
      <p>
        Версия: <strong>{{ framework2.version2 }}</strong>
      </p>
      <p>name: {{ name }} + version: {{ version }}</p>
      <p>name2: {{ framework2.name2 }} + name3: {{ name3 }}</p>
      <p>doubleVer: {{ doubleVer }}</p>
      <p>doubleFrame: {{ doubleFrame }}</p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
/*
composition Заменяет data, methods, computed, watch
 */

// eslint-disable-next-line no-unused-vars
import { ref, reactive, toRefs, computed } from "vue";

export default {
  setup() {
    // reactive - proxy для работы с объектами
    const framework = reactive({
      name: "Vue JS!",
      version: 3,
    });

    const framework2 = ref({
      name2: "name2",
      version2: 23,
    });

    const name3 = ref("name3");

    function changeInfo() {
      framework.name = "VUE JS changed";
      framework2.value.name2 = "Name2 changed";
      name3.value = "name3 changed";
    }

    const doubleVer = computed(() => {
      return `<<${name3.value}>>`;
    });

    const doubleFrame = computed(() => `<<${framework.name}>>`);

    // то что в return будет доступно в шаблоне
    return {
      ...toRefs(framework), // на выходе name + version в реактивном виде
      framework2,
      name3,

      change: changeInfo,
      doubleVer,
      doubleFrame,
    };
  },
};
</script>
