import { createStore, createLogger } from "vuex";

import {
  AuthModule,
  Store as AuthStore,
  State as AuthState
} from "@/store/modules/auth_store_index";

import {
  DomainModule,
  Store as DomainStore,
  State as DomainState
} from "@/store/modules/domain_store_index";

export type State = {
  auth: AuthState;
  domain: DomainState;
};

export type Store = AuthStore<Pick<State, "auth">> &
  DomainStore<Pick<State, "domain">>;

export const store = createStore({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  modules: { AuthModule, DomainModule }
});

export function useStore(): Store {
  return store as Store;
}

export default store;
