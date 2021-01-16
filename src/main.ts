import { createApp } from "vue";
import router from "./routes";

import App from "./App.vue";
import "./theme.css";

import "@utils/FBCustInit";

createApp(App).use(router).mount("#app");
