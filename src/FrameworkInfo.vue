<template>
  <div class="card">
    <p>
      Название: <strong>{{ framework.name }}</strong>
    </p>
    <p>
      Версия: <strong>{{ framework.version }}</strong> - ({{ doubleVer }})
    </p>

    <button class="btn warning" @click="changeVer">Изменить на 3.3</button>
  </div>
</template>

<script>
import { computed, inject } from "vue";

export default {
  name: "FrameworkInfo",

  emits: ["changeVer"],
  setup(props, context) {
    const doubleVer = computed(() => framework.version * 2);

    function changeVer() {
      context.emit("changeVer", 4);
    }

    const framework = inject("framework");

    return {
      doubleVer,
      changeVer,
      framework,
    };
  },
};
</script>

<style scoped></style>
