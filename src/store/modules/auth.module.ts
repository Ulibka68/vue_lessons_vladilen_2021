import { ActionContext, Commit, Module } from "vuex";
import { tRootState } from "@/store/index";

export type tToken = null | string;

export interface tState {
  token: tToken;
}

const TOKEN_KEY = "jwt-token";

export const auth: Module<tState, tRootState> = {
  namespaced: true,
  state(): tState {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },
  getters: {
    token(state: tState) {
      return state.token;
    },
    isAuthenticated(state: tState) {
      return !!state.token;
    },
    isAuthenticated2(_, getters) {
      return !!getters.token;
    },
  },

  mutations: {
    setToken(state: tState, token: tToken) {
      state.token = token;
      localStorage.setItem(TOKEN_KEY, token ?? "");
    },
    logout(state: tState) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },

  actions: {
    async login({ commit }: ActionContext<tState, tRootState>, payload) {
      console.log("async login store payload : ", payload);
      commit("setToken", "TEST TOKEN");
    },
  },
};
