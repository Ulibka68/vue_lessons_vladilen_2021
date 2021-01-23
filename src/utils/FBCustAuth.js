// import { FirebaseAuth, UserCredential, User } from "@firebase/auth-types";
import { fbAppAuth } from "./FBCustInit";
import store from "@/store";
import router from "@/router";

// import { logedUserType } from "@/utils/commonTypes";

function CheckModuleLoad() {
  if (!fbAppAuth) {
    throw new Error("Подождите - идет загрузка модуля авторизации");
  }
}

/*
  email: string,
  password: string,
  name: string

  возвращает: Promise<logedUserType>
 */
export async function registerNewUser(email, password, name) {
  CheckModuleLoad();
  // const data: UserCredential
  const data = await fbAppAuth.createUserWithEmailAndPassword(email, password);

  if (data) {
    await data.user.updateProfile({ displayName: name });

    return {
      displayName: name,
      email: email,
      emailVerified: false,
      uid: data.user.uid,
    };
  }
}

/*
interface loginUserByEmailReturnType {
  result: boolean;
  logedUser: logedUserType;
  errMsg: string;
}

 */

/*
export async function loginUserByEmail(
  email: string,
  password: string
): Promise<loginUserByEmailReturnType> {

 */
export async function loginUserByEmail(email, password) {
  try {
    CheckModuleLoad();
    // const data: UserCredential
    const data = await fbAppAuth.signInWithEmailAndPassword(email, password);

    if (data.user) {
      return { result: true, errMsg: "" };
    } else {
      return {
        result: false,
        errMsg: "вход не выполнен",
      };
    }
  } catch (err) {
    return {
      result: false,
      errMsg: err.message,
    };
  } finally {
    store.commit("Auth/storeFirebaseCurrentUser");
  }
}

export async function logout() {
  CheckModuleLoad();
  if (fbAppAuth) fbAppAuth.signOut();

  // будет вызвано автоматом по событию
  // store.commit("Auth/storeFirebaseCurrentUser");
}

export function hearFirebaseAuthEvent() {
  if (fbAppAuth) {
    // eslint-disable-next-line no-unused-vars
    fbAppAuth.onAuthStateChanged((user) => {
      console.log("onAuthStateChanged fired");
      store.commit("Auth/storeFirebaseCurrentUser");
      if (user) {
        router.push({ name: "Home" });
      }
    });
  }
}
