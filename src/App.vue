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

      <div class="form-control">
        <input type="text" ref="textInput" />
      </div>

      <br />
      <p>input v-model="firstName" /></p>
      <div class="form-control">
        <input type="text" v-model="firstName" />
      </div>
      <p>input v-model="formInpust" /></p>
      <div class="form-control">
        <input type="text" v-model="formInputs.lName" />
      </div>

      <button class="btn" @click="change">Изменить</button>
      <button class="btn" @click="handleInpVal">Получить значение input</button>
    </div>
  </div>
</template>

<script>
/*
composition Заменяет data, methods, computed, watch
 */

// eslint-disable-next-line no-unused-vars
import { ref, reactive, toRefs, computed, watch } from "vue";

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

    const formInputs = reactive({
      fName: "",
      lName: "",
    });
    watch(formInputs, (val) => {
      console.log("keys:", Object.keys(val));
      console.log(val);
      console.log(val.lName);
    });

    const firstName = ref("");
    watch(firstName, (newVal) => {
      // console.log(newVal);
      console.log(newVal);
    });

    // инициализация ref на Dom
    const textInput = ref(null);

    function changeInfo() {
      framework.name = "VUE JS changed";
      framework2.value.name2 = "Name2 changed";
      name3.value = "name3 changed";
    }

    const doubleVer = computed(() => {
      return `<<${name3.value}>>`;
    });

    watch([doubleVer, name3], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    const doubleFrame = computed(() => `<<${framework.name}>>`);

    function handleInpVal() {
      // textInput.value - указатель на DOM Node input
      console.log(textInput.value.value);
    }

    // то что в return будет доступно в шаблоне
    return {
      ...toRefs(framework), // на выходе name + version в реактивном виде
      framework2,
      name3,

      change: changeInfo,
      doubleVer,
      doubleFrame,
      textInput,
      handleInpVal,
      firstName,
      formInputs,
    };
  },
};
</script>
