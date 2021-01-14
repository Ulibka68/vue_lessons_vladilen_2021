import { createApp } from "vue";
import router from "./routes";

import App from "./App.vue";
import "./theme.css";

import "@utils/FireBaseCust";

createApp(App).use(router).mount("#app");
