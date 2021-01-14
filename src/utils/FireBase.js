import firebase from "firebase/app";
import "firebase/database";
import { firebaseConfig } from "../../fbconf";
// import FK from "./fakeComments.json";

// блок выполняется один раз
// инициализация Firebase
firebase.initializeApp(firebaseConfig);
// эта опция для web выставлена изначально
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export async function NewData(uid, blocks) {
  // firebase.database.Reference;
  let database = firebase.database();

  database.ref("post/" + uid).set(blocks, function (error) {
    console.log("Начало записи в бд : ", uid);
    if (error) {
      // The write failed...
      console.error("Ошибка записи в бд ", error.message);
      return { result: false, msg: "Ошибка записи в бд " + error.message };
    } else {
      // Data saved successfully!
      console.log("Данные записаны");
      return { result: true, msg: "OK" };
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

export function readComments() {
  return firebase
    .database()
    .ref("comments/")
    .once("value")
    .then((snapshot) => {
      // console.log(" данные прочитаны", snapshot.val());
      return snapshot.val();
    })
    .catch((e) => {
      console.error("Ошибка бд", e);
    });
}

/*
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
*/
