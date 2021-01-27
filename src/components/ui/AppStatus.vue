<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { defineComponent, ref, watch } from "vue";
import { statusDescriptions, statusArr, tStatus } from "@/store";

export default defineComponent({
  name: "AppStatus",
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return statusArr.includes(value as tStatus);
      },
    },
  },
  setup(props) {
    // watch(props, (val) => {
    //     className.value = statusDescriptions[val.type].className;
    //     text.value = statusDescriptions[val.type].text;
    // });

    // @ts-ignore
    const className = ref(statusDescriptions[props.type].className);
    // @ts-ignore
    const text = ref(statusDescriptions[props.type].text);

    return {
      className,
      text,
    };
  },
});
</script>

<style scoped></style>
