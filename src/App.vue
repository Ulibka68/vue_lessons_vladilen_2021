<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Это важно"
      title="Alert"
      type="warning"
      closable
      @click="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть сообщение" : "Показать сообщение" }}
      </button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert";
import AppBlock from "@/components/AppBlock";

export default {
  components: { AppAlert, AppBlock },
  // поскольку это описано в глобальном миксине - то vue добавит этот кусок кода сам
  /*
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert;
    },
  },

   */
};
</script>
