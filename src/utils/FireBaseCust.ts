import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { firebaseConfig } from "../../fbconf";
import {
  onePostType,
  oneCommentType,
  logedUserType,
} from "@/utils/commonTypes";

// import FK from "./fakeComments.json";

// блок выполняется один раз
// инициализация Firebase
firebase.initializeApp(firebaseConfig);
// эта опция для web выставлена изначально
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
interface NewDataResult {
  result: boolean;
  msg: string;
}

export async function NewData(
  uid: string,
  blocks: onePostType[]
): Promise<NewDataResult> {
  const db: firebase.database.Database = firebase.database();
  try {
    await db.ref("post/" + uid).set(blocks);

    return { result: true, msg: "string;" };
  } catch (error) {
    return { result: false, msg: "Ошибка записи в бд " + error.message };
  }
}

export function readPost(uid: string): Promise<onePostType[]> {
  return firebase
    .database()
    .ref("post/" + uid)
    .once("value")
    .then((snapshot: firebase.database.DataSnapshot) => {
      // console.log(" данные прочитаны", snapshot.val());
      return snapshot.val();
    })
    .catch((e) => {
      console.error("Ошибка бд", e);
    });
}

export function readComments(): Promise<oneCommentType> {
  return firebase
    .database()
    .ref("comments/")
    .once("value")
    .then((snapshot: firebase.database.DataSnapshot) => {
      // console.log(" данные прочитаны", snapshot.val());
      return snapshot.val();
    })
    .catch((e) => {
      console.error("Ошибка бд", e);
    });
}

export async function registerNewUser(
  email: string,
  password: string,
  name: string
): Promise<logedUserType> {
  const data: firebase.auth.UserCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  const user: firebase.User = data.user as firebase.User;

  await user.updateProfile({ displayName: name });

  return {
    displayName: name,
    email: email,
    emailVerified: false,
    uid: user.uid,
  };
}

interface loginUserByEmailReturnType {
  result: boolean;
  logedUser: logedUserType;
  errMsg: string;
}

export async function loginUserByEmail(
  email: string,
  password: string
): Promise<loginUserByEmailReturnType> {
  try {
    const data: firebase.auth.UserCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user: firebase.User = data.user as firebase.User;
    const logedUser: logedUserType = {
      // eslint-disable-next-line
      displayName: user.displayName!,
      // eslint-disable-next-line
      email: user.email!,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
    return { result: true, logedUser, errMsg: "" };
  } catch (err) {
    return {
      result: false,
      logedUser: { displayName: "", email: "", emailVerified: false, uid: "" },
      errMsg: err.message,
    };
  }
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
