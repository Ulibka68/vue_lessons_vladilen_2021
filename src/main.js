import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";

createApp(App)
  // директива v-focus
  // .directive("focus", {
  //   mounted(el) {
  //     el.focus();
  //   },
  // })
  .mount("#app");
