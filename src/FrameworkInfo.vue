<template>
  <div class="card">
    <p>
      Название: <strong>{{ name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ version }}</strong> - ({{ doubleVer }})
    </p>

    <button class="btn warning" @click="changeVer">Изменить на 3.3</button>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "FrameworkInfo",
  props: ["name", "version"],
  emits: ["changeVer"],
  setup(props, context) {
    console.log(context);

    const doubleVer = computed(() => props.version * 2);

    function changeVer() {
      context.emit("changeVer", 4);
      // есть attr  props slots
      // it is not reactive
    }

    return {
      doubleVer,
      changeVer,
    };
  },
};
</script>

<style scoped></style>
