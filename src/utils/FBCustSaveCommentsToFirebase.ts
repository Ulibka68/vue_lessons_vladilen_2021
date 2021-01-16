import firebase from "firebase/app";
import "firebase/database";

// служебный модуль для записи JSON в Firebase - в сборку не входит

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { firebaseConfig } from "../../fbconf";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FK from "./fakeComments.json";

// инициализация Firebase
firebase.initializeApp(firebaseConfig);

export function postCommentsToDB() {
  const database = firebase.database();

  console.log(FK.length);
  let itm = FK[0];
  console.log(itm);

  for (let i = 0; i < FK.length; i++) {
    console.log("Начало записи в бд : ", itm.id);
    itm = FK[i];
    database.ref("comments/" + itm.id).set(itm, function (error) {
      if (error) {
        // The write failed...
        console.error("Ошибка записи в бд ", error.message);
      } else {
        // Data saved successfully!
        console.log("Данные записаны");
      }
    });
  }
}
