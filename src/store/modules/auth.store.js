// initial state

import { fbAppAuth } from "@/utils/FBCustInit";
import {
  addUser,
  fbAppDatabaseTs,
  CheckFirebaseDatabaseLoad,
} from "@/utils/FBCustDatabase";
import store from "@/store";

const EmptyUser = {
  displayName: "Неизвестный",
  email: "",
  emailVerified: false,
  uid: null,
  provider: "email",
};

// userList содержит записи вида:
//  {  masmkas : Вася, asdm:Петя}
//  userName: Вася,  masmkas : uid}
// поскольку ключ уникальный - то храню в объекте

const state = () => ({
  logedUser: EmptyUser,
  isAuth: false,
  userList: {}, // список пользователей
});

// getters
// cartProducts: (state, getters, rootState)
const getters = {
  currentUser: (state) => state.logedUser.displayName,
  currentUserUid: (state) => state.logedUser.uid,
  isLogged: (state) => state.isAuth,

  // возвращает displayName
  getUserByUid: (state) => (uid) => {
    return state.userList[uid];
  },

  getUserListLength: (state) => {
    // console.log("getUserListLength");
    return Object.keys(state.userList).length;
  },
};

// mutations
const mutations = {
  setCurrentUser(state, newUser) {
    state.logedUser = newUser;
  },
  setCurrentUserName(state, newUserName) {
    state.logedUser.displayName = newUserName;
  },
  setEmptyUser(state) {
    state.logedUser = EmptyUser;
  },
  setAuth(state, authState) {
    state.isAuth = authState;
  },

  // eslint-disable-next-line no-unused-vars
  storeFirebaseCurrentUser(state) {
    const user = fbAppAuth.currentUser;
    if (user) {
      const { displayName, email, emailVerified, uid } = user;
      store.commit("Auth/setAuth", true);
      console.log({
        displayName,
        email,
        emailVerified,
        uid,
      });
      store.commit("Auth/setCurrentUser", {
        displayName,
        email,
        emailVerified,
        uid,
      });
      console.log('"Auth/addUserToList"', { displayName, uid });
      store.commit("Auth/addUserToList", { displayName, uid });
      console.log('"Auth/addUserToList" END --');
    } else {
      store.commit("Auth/setAuth", false);
      store.commit("Auth/setEmptyUser");
    }
  },

  // userList
  storeUserList(state, newUserList) {
    state.userList = newUserList;
  },

  addUserToList(state, { displayName, uid }) {
    if (displayName) {
      state.userList[uid] = displayName;
    }
  },
};

// actions
// addProductToCart ({ state, commit }, product) {
const actions = {
  setCurrentUserAction({ commit }, newUser) {
    commit("setCurrentUser", newUser);
  },
  setEmptyUserAction({ commit }) {
    commit("setEmptyUser");
  },

  // eslint-disable-next-line no-unused-vars
  async readUserListFromDB({ commit }) {
    CheckFirebaseDatabaseLoad();
    const snapshot = await fbAppDatabaseTs.ref("users/").once("value");
    const userList = await snapshot.val();
    commit("storeUserList", userList);
    // console.log(userList);
  },

  // eslint-disable-next-line no-unused-vars
  async addNewUserToDB(_, { displayName, uid }) {
    addUser({ displayName, uid });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
