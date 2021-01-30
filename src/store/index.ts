import { createStore, createLogger, Payload } from "vuex";

import {
  AuthModule,
  Store as AuthStore,
  State as AuthState
} from "@/store/modules/auth";

import { CounterModule } from "@/store/modules/counter";

/*
import {
  DomainModule,
  Store as DomainStore,
  State as DomainState
} from "@/store/modules/domain_store_index";
*/

export type State = {
  auth: AuthState;
  // domain: DomainState;
};

export type Store = AuthStore<Pick<State, "auth">>;
// &   DomainStore<Pick<State, "domain">>;

export const store = createStore({
  plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  // modules: { AuthModule, DomainModule }
  modules: { AuthModule, CounterModule }
  // modules: { AuthModule, DomainModule }
});

export function myUseStore(): Store {
  return store as Store;
}

export default store;

interface SetAdd extends Payload {
  addCnt: number;
  type: "setAdd";
}

store.commit({ type: "setAdd", addCnt: 10 } as SetAdd);
