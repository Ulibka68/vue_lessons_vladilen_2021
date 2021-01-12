import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import "./theme.css";

import firebase from "firebase";
import { firebaseConfig } from "../fbconf";
firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

createApp(App).use(router).mount("#app");
