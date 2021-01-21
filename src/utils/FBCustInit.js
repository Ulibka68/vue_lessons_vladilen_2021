import { firebaseConfig } from "../../fbconf";

export let fbApp = null;
export let fbAppAuth = null;
export let listenersCallbacks = []; // будут вызываны зарегистрированные слушатели

// в этот модуль включим инициализацию Firebase
import(
  /* webpackChunkName: "firebase-app" */
  /* webpackMode: "lazy-once" */
  "firebase/app"
).then((fbAppProp) => {
  // блок выполняется один раз
  // инициализация Firebase
  fbApp = fbAppProp.default;

  fbApp.initializeApp(firebaseConfig);

  import(
    /* webpackChunkName: "firebase-auth" */
    /* webpackMode: "lazy-once" */
    "firebase/auth"
  ).then((fbAppProp) => {
    fbAppAuth = fbApp.auth();
    console.log("Система авторизации инициализирована");

    // после получения интерфейса вызвать зарегистрированных слушателей
    console.log(`listenersCallbacks has ${listenersCallbacks.length} elements`);
    listenersCallbacks.map((funcCallBack) => {
      funcCallBack(fbAppAuth);
    });
  });
});
