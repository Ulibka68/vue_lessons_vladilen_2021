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
    const doubleVer = computed(() => props.version * 2);

    function changeVer() {
      context.emit("changeVer", 4);
    }

    return {
      doubleVer,
      changeVer,
    };
  },
};
</script>

<style scoped></style>
