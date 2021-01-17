import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";
import translatePlagin from "@/translatePlagin";

const app = createApp(App);

const ru = {
  app: {
    title: "Как работают плагины VUE",
    btnTitle: "Переключить язык",
  },
};

const en = {
  app: {
    title: "How VUE plagins works",
    btnTitle: "Switch language",
  },
};

app.use(translatePlagin, { ru, en });
app.mount("#app");
