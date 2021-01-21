// initial state

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
  setEmptyUser(state) {
    state.logedUser = EmptyUser;
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
