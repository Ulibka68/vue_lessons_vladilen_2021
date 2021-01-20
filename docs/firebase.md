# Установка Firebase
### Выполнить один раз
npm install -g firebase-tools  
firebase login
firebase init

### Deploy
firebase deploy


### код 
https://firebase.google.com/docs/web/setup?authuser=0#using-module-bundlers

npm install --save firebase

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
// ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



***************

<script defer src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>

<script defer src="https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js"></script>
<script defer src="https://www.gstatic.com/firebasejs/8.2.2/firebase-firestore.js"></script>

// ...

<script defer src="./init-firebase.js"></script>

Создайте файл init-firebase.js , затем включите в него следующее:


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
// ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

## Авторизация
https://blog.logrocket.com/vue-firebase-authentication/
