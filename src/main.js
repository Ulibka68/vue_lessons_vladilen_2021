import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import alertMixin from "./alertMixin";

createApp(App).mixin(alertMixin).mount("#app");
