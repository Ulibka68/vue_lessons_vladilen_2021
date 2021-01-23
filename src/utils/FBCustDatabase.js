// import { onePostType, oneCommentType } from "@/utils/commonTypes";
import { fbApp } from "./FBCustInit";
// import { Database, DataSnapshot } from "@firebase/database-types";

// let fbAppDatabaseTs: Database;
export let fbAppDatabaseTs;
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

  try {
    const taskNewRef = await fbAppDatabaseTs.ref("tasks/" + uid).push();
    blocks.createdAt = Date.now();
    await taskNewRef.set(blocks);

    return { result: true, msg: "", taskNewRef: taskNewRef.key };
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

export async function addUser({ displayName, uid }) {
  CheckFirebaseDatabaseLoad();
  return await fbAppDatabaseTs.ref("users/" + uid).set(displayName);
}
