// import { onePostType, oneCommentType } from "@/utils/commonTypes";
import { fbApp } from "./FBCustInit";
// import { Database, DataSnapshot } from "@firebase/database-types";

// let fbAppDatabaseTs: Database;
let fbAppDatabaseTs;
let fbAppDatabaseTsInitialized = false;

export function loadFirebaseDatabaseAsyncModule() {
  import(
    /* webpackChunkName: "firebase-database" */
    /* webpackMode: "lazy" */
    "firebase/database"
  ).then(() => {
    if (fbApp) {
      fbAppDatabaseTs = fbApp.database();
      fbAppDatabaseTsInitialized = true;
      console.log("Firebase Database инициализирован");
    } else {
      //  буду считать что app загружен и инициализирован
      throw new Error("Firebase fbApp не загружен");
    }
  });
}

export function CheckFirebaseDatabaseLoad() {
  if (!fbAppDatabaseTsInitialized) {
    loadFirebaseDatabaseAsyncModule();
    throw new Error("Подождите - идет загрузка модуля авторизации");
  }
}

/*
interface NewDataResult {
  result: boolean;
  msg: string;
}
*/

/*
export async function NewData(
    uid: string,
    blocks: onePostType[]
): Promise<NewDataResult> {

 */

export async function NewData(uid, blocks) {
  CheckFirebaseDatabaseLoad();
  // const db: Database = fbAppDatabaseTs;
  const db = fbAppDatabaseTs;
  try {
    await db.ref("post/" + uid).set(blocks);

    return { result: true, msg: "string;" };
  } catch (error) {
    return { result: false, msg: "Ошибка записи в бд " + error.message };
  }
}

// export function readPost(uid: string): Promise<onePostType[]> {
export function readPost(uid) {
  CheckFirebaseDatabaseLoad();
  return (
    fbAppDatabaseTs
      .ref("post/" + uid)
      .once("value")
      // .then((snapshot: DataSnapshot) => {
      .then((snapshot) => {
        // console.log(" данные прочитаны", snapshot.val());
        return snapshot.val();
      })
      .catch((e) => {
        console.error("Ошибка бд", e);
      })
  );
}
