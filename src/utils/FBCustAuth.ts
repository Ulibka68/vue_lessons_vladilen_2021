import { FirebaseAuth, UserCredential, User } from "@firebase/auth-types";
import { fbAppAuth } from "./FBCustInit";

import { logedUserType } from "@/utils/commonTypes";

let fbAppAuthTs: FirebaseAuth = fbAppAuth;

function CheckModuleLoad() {
  if (!fbAppAuth) {
    throw new Error("Подождите - идет загрузка модуля авторизации");
  } else {
    fbAppAuthTs = fbAppAuth;
  }
}

export async function registerNewUser(
  email: string,
  password: string,
  name: string
): Promise<logedUserType> {
  CheckModuleLoad();
  const data: UserCredential = await fbAppAuthTs.createUserWithEmailAndPassword(
    email,
    password
  );

  await data!.user!.updateProfile({ displayName: name });

  return {
    displayName: name,
    email: email,
    emailVerified: false,
    uid: data.user!.uid,
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
    CheckModuleLoad();
    const data: UserCredential = await fbAppAuthTs.signInWithEmailAndPassword(
      email,
      password
    );
    if (data.user) {
      const user: User = data.user;
      const logedUser: logedUserType = {
        displayName: user.displayName!,
        email: user.email!,
        emailVerified: user.emailVerified,
        uid: user.uid,
      };
      return { result: true, logedUser, errMsg: "" };
    } else {
      return {
        result: false,
        logedUser: {
          displayName: "",
          email: "",
          emailVerified: false,
          uid: "",
        },
        errMsg: "вход не выполнен",
      };
    }
  } catch (err) {
    return {
      result: false,
      logedUser: { displayName: "", email: "", emailVerified: false, uid: "" },
      errMsg: err.message,
    };
  }
}
