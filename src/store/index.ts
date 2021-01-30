import { createStore, createLogger } from "vuex";

import {
  AuthModule,
  Store as AuthStore,
  State as AuthState
} from "@/store/modules/auth";

export type State = {
  auth: AuthState;
};

export type Store = AuthStore<Pick<State, "auth">>;
// &   DomainStore<Pick<State, "domain">>;

export const store = createStore({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  // modules: { AuthModule, DomainModule }
  modules: { AuthModule }
});

export function myUseStore(): Store {
  return store as Store;
}

export default store;
