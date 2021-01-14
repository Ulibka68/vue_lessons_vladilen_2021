<template>
  <div v-show="ShowState" class="alert" :class="infoPanelClass">
    <p>{{ infoPanelMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "InfoPanelShow",
  data() {
    return {
      TimerHandler: 0,
      ShowState: false,
    };
  },
  props: {
    infoPanelMessage: { type: String, default: "infoPanelMessage" },
    infoPanelClass: { type: String, default: "primary" }, // еще может быть danger
    infoPanelTimeOut: { type: Number, default: 2000 },
  },
  methods: {
    ShowInfo() {
      if (this.TimerHandler) {
        clearTimeout(this.TimerHandler);
        this.TimerHandler = 0;
      }
      this.ShowState = true;
      this.StartTimer();
    },
    StartTimer() {
      console.log("StartTimer");

      this.TimerHandler = setTimeout(() => {
        this.ShowState = false;
        this.TimerHandler = 0;
      }, this.infoPanelTimeOut);
    },
  },

  beforeUnmount() {
    if (this.TimerHandler) {
      clearTimeout(this.TimerHandler);
    }
  },
};
</script>

<style scoped></style>
