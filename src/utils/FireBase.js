import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "../../fbconf";

// блок выполняется один раз
// инициализация Firebase
firebase.initializeApp(firebaseConfig);
// эта опция для web выставлена изначально
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export function NewData(uid, blocks) {
  // firebase.database.Reference;
  let database = firebase.database();

  database.ref("post/" + uid).set(blocks, function (error) {
    console.log("Начало записи в бд : ", uid);
    if (error) {
      // The write failed...
      console.error("Ошибка записи в бд ", error.message);
    } else {
      // Data saved successfully!
      console.log("Данные записаны");
    }
  });
}

export function readPost(uid) {
  return firebase
    .database()
    .ref("post/" + uid)
    .once("value")
    .then((snapshot) => {
      // console.log(" данные прочитаны", snapshot.val());
      return snapshot.val();
    })
    .catch((e) => {
      console.error("Ошибка бд", e);
    });
}
