import { createApp } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import router from "./routes";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from "./App.vue";
import "./theme.css";

import "@utils/FireBaseCust";
// import firebase from "firebase";
// import { firebaseConfig } from "../fbconf";
// firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

createApp(App).use(router).mount("#app");
