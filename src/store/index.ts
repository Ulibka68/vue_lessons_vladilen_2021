import {
  createStore,
  Store,
  useStore as baseUseStore,
  createLogger,
  ActionContext,
} from "vuex";
import { InjectionKey } from "vue";
import { auth } from "./modules/auth.module";
import { tRequestState, request } from "@/store/modules/request.module";
import { error } from "@/utils/error";

export type { tOneRequest, tStatus } from "@/store/modules/request.module";
export {
  statusDescriptions,
  statusDescriptionsArray,
  statusArr,
} from "@/store/modules/request.module";

const plugins = [];
if (process.env.NODE_ENV === "development") {
  plugins.push(createLogger());
}
// define your typings for the store state
export interface tRootState {
  message: tMessage | null;
  sidebar: boolean;
}
export type tMessage = { value: string; type: string };

// define injection key
export const key: InjectionKey<Store<tRootState>> = Symbol();

export const store = createStore<tRootState>({
  state() {
    return { message: null, sidebar: false };
  },
  plugins,
  mutations: {
    setMessage(state: tRootState, message: tMessage) {
      state.message = message;
    },
    clearMessage(state: tRootState) {
      state.message = null;
    },
    openSidebar(state: tRootState) {
      state.sidebar = true;
    },
    closeSidebar(state: tRootState) {
      state.sidebar = false;
    },
  },
  actions: {
    setMessage(
      { commit }: ActionContext<tRootState, tRootState>,
      message: tMessage
    ) {
      commit("setMessage", message);
      setTimeout(() => {
        commit("clearMessage", null, { root: true });
      }, 4000);
    },
  },
  modules: { auth, request },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
