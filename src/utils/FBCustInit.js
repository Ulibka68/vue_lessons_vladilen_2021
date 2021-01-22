import { firebaseConfig } from "../../fbconf";
import { loadFirebaseDatabaseAsyncModule } from "./FBCustDatabase";
import store from "@/store";

export let fbApp = null;
export let fbAppAuth = null;
export let listenersCallbacks = []; // будут вызываны зарегистрированные слушатели

function testStore() {
  store.commit("Counter/incrCounter");
  console.log("testStore getter", store.getters["Counter/counter"]);
}

// в этот модуль включим инициализацию Firebase
import(
  /* webpackChunkName: "firebase-app" */
  /* webpackMode: "lazy" */
  "firebase/app"
).then((fbAppProp) => {
  // блок выполняется один раз
  // инициализация Firebase
  fbApp = fbAppProp.default;

  fbApp.initializeApp(firebaseConfig);

  import(
    /* webpackChunkName: "firebase-auth" */
    /* webpackMode: "lazy" */
    "firebase/auth"
  ).then(() => {
    fbAppAuth = fbApp.auth();
    console.log("Система авторизации инициализирована");
    testStore();

    // данная функция вызывается после инициализации auth - Значит пора инициализировать DB
    loadFirebaseDatabaseAsyncModule();

    // после получения интерфейса вызвать зарегистрированных слушателей
    console.log(
      `Firebase listenersCallbacks has ${listenersCallbacks.length} elements`
    );
    listenersCallbacks.map((funcCallBack) => {
      funcCallBack(fbAppAuth);
    });
  });
});
