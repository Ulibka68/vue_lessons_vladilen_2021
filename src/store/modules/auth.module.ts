import {
  ActionContext,
  Commit,
  Module,
  MutationTree,
  ActionTree,
  GetterTree,
} from "vuex";
import { tRootState } from "@/store/index";

export type tToken = null | string;

export interface tState {
  token: tToken;
}

const TOKEN_KEY = "jwt-token";

// https://dev.to/3vilarthas/vuex-typescript-m4j

export enum MutationTypes {
  SETTOKEN = "SETTOKEN",
  LOGOUT = "LOGOUT",
}

export type Mutations<S = tState> =
  | {
      [MutationTypes.SETTOKEN](state: S, payload: tToken): void;
    }
  | {
      [MutationTypes.LOGOUT](state: S): void;
    };
// [MutationTypes.LOGOUT](state: S): void
// };

export const mutations: MutationTree<tState> & Mutations = {
  [MutationTypes.SETTOKEN](state: tState, payload: tToken) {
    state.token = payload;
    localStorage.setItem(TOKEN_KEY, payload ?? "");
  },
  [MutationTypes.LOGOUT](state: tState) {
    state.token = null;
    localStorage.removeItem(TOKEN_KEY);
  },
};

export enum ActionTypes {
  LOGIN_ACTION = "LOGIN_ACTION",
  LOGOUT = "LOGOUT",
}

type tLogin = { email: string; password: string };

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<tState, tRootState>, "commit">;

export interface Actions {
  [ActionTypes.LOGIN_ACTION](
    { commit }: AugmentedActionContext,
    payload: tLogin
  ): Promise<number>;
}

export const actions: ActionTree<tState, tRootState> & Actions = {
  async [ActionTypes.LOGIN_ACTION](
    { commit }: ActionContext<tState, tRootState>,
    payload: tLogin
  ) {
    return new Promise((resolve) => {
      console.log("async login store payload : ", payload);
      commit(MutationTypes.SETTOKEN, "TEST TOKEN");
    });
  },
  async [ActionTypes.LOGOUT]({ commit }: ActionContext<tState, tRootState>) {
    return new Promise((resolve) => {
      commit(MutationTypes.LOGOUT);
    });
  },
};

export type Getters =
  | {
      token(state: tState): tToken;
    }
  | { isAuthenticated(state: tState): boolean };

export const getters: GetterTree<tState, tRootState> & Getters = {
  token(state: tState) {
    return state.token;
  },
  isAuthenticated(state: tState) {
    return !!state.token;
  },
};

//*******************************************************************
/*
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


 */
