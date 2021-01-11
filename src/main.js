import { createApp } from "vue";
import App from "./App.vue";
import "./theme.css";

import firebase from "firebase/app";
import firebaseConfig from "../fbconf";
// Add the Firebase products that you want to use
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).mount("#app");
