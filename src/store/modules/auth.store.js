// initial state

import { fbAppAuth } from "@/utils/FBCustInit";
import store from "@/store";

const EmptyUser = {
  displayName: "Неизвестный",
  email: "",
  emailVerified: false,
  uid: null,
  provider: "email",
};

const state = {
  logedUser: EmptyUser,
  isAuth: false,
};

// getters
// cartProducts: (state, getters, rootState)
const getters = {
  currentUser: (state) => state.logedUser.displayName,
  currentUserUid: (state) => state.logedUser.uid,
  isLogged: (state) => state.isAuth,
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

  storeFirebaseCurrentUser() {
    const user = fbAppAuth.currentUser;
    if (user) {
      const { displayName, email, emailVerified, uid } = user;
      store.commit("Auth/setAuth", true);
      store.commit("Auth/setCurrentUser", {
        displayName,
        email,
        emailVerified,
        uid,
      });
    } else {
      store.commit("Auth/setAuth", false);
      store.commit("Auth/setEmptyUser");
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
