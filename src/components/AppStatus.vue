<template>
  <span class="badge" :class="className">{{ title }}</span>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return ["active", "done", "cancelled", "pending"].includes(value);
      },
    },
  },
  computed: {
    className() {
      let result = "";
      switch (this.type) {
        case "active":
          result = "primary";
          break;

        case "done":
          result = "";
          break;

        case "cancelled":
          result = "danger";
          break;

        case "pending":
          result = "warning";
          break;
      }
      return result;
    },
    title() {
      let result = "";
      switch (this.type) {
        case "active":
          result = "Активен";
          break;

        case "done":
          result = "Завершен";
          break;

        case "cancelled":
          result = "Отменен";
          break;

        case "pending":
          result = "Отложен";
          break;
      }
      return result;
    },
  },
};
// Статус может быть 4х типов: ['active', 'done', 'cancelled', 'pending']
</script>
