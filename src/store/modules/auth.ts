import {
  MutationTree,
  Module,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions
} from "vuex";

import { State as RootState } from "@/store";

// Declare state
export type State = {
  isAuthenticated: boolean;
  userName?: string;
};

// Create initial state
const state: State = {
  isAuthenticated: false
};

// mutations enums
export enum MutationTypes {
  SET_USER_AUTHENTICATED = "SET_USER_AUTHENTICATED"
}

const mutationArray = ["setUserName", "SET_USER_AUTHENTICATED"];
export type tMutation = typeof mutationArray[number];

// Mutation contracts
export type Mutations<S = State> = {
  [MutationTypes.SET_USER_AUTHENTICATED](state: S): void;
  setUserName(state: State): void;
};

// Define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_USER_AUTHENTICATED](state: State) {
    state.isAuthenticated = true;
  },
  setUserName(state: State) {
    state.userName = "a";
  }
};

//setup store type
export type Store<S = State> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export const AuthModule: Module<State, RootState> = {
  state,
  mutations
  // Namespacing Vuex modules is tricky and hard to type check with typescript.
  // Instead of namespacing, we could create our own namespacing mechanism by
  // prefixing the value of the TypeScript enum with the namespace, e.g.
  // enum TodoActions {
  //   AddTodo = 'TODO__ADD_TODO'
  // }
  // namespaced: true,
};
