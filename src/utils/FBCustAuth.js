// import { FirebaseAuth, UserCredential, User } from "@firebase/auth-types";
import { fbAppAuth } from "./FBCustInit";
import { useStore } from "vuex";

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

  await data.user.updateProfile({ displayName: name });

  return {
    displayName: name,
    email: email,
    emailVerified: false,
    uid: data.user.uid,
  };
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
      // const user: User
      const user = data.user;
      // const logedUser: logedUserType
      const logedUser = {
        displayName: user.displayName,
        email: user.email,
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

export async function logout() {
  CheckModuleLoad();
  if (fbAppAuth) fbAppAuth.signOut();
  const store = useStore();
  store.commit("Auth/setEmptyUser");
  store.commit("Auth/setAuth", false);
  // this.$router.replace({ name: "Home" });
}
