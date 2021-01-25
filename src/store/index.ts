import {
  createStore,
  Store,
  useStore as baseUseStore,
  createLogger,
} from "vuex";
import { InjectionKey } from "vue";
import { auth } from "./modules/auth.module";

const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());
}
// define your typings for the store state
export interface tRootState {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<tRootState>> = Symbol();

export const store = createStore<tRootState>({
  state: { count: 1 },
  plugins,
  mutations: {},
  actions: {},
  modules: { auth },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
