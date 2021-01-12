import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./theme.css";

import firebase from "firebase/app";
import { firebaseConfig } from "../fbconf";
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
