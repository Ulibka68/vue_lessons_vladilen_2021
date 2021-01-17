<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Это важно"
      title="Alert"
      type="primary"
      closable
      @click="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть сообщение" : "Показать сообщение" }}
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert";
import alertMixin from "@/alertMixin";

export default {
  components: { AppAlert },
  mixins: [alertMixin],
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
