import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlagin from "@/translatePlagin";

const app = createApp(App);
app.use(translatePlagin, { test: 1 });
app.mount("#app");
