import { createStore, Store, useStore as baseUseStore, createLogger, ActionContext } from "vuex";
import { InjectionKey } from "vue";
import { auth } from "./modules/auth.module";
import { error } from "@/utils/error";

const plugins = [];
if (process.env.NODE_ENV === "development") {
    plugins.push(createLogger());
}
// define your typings for the store state
export interface tRootState {
    message: tMessage | null;
    counter: number;
}
export type tMessage = { value: string; type: string };

// define injection key
export const key: InjectionKey<Store<tRootState>> = Symbol();

export const store = createStore<tRootState>({
    state() {
        return { message: null, counter: 1 };
    },
    plugins,
    mutations: {
        setMessage(state: tRootState, message: tMessage) {
            state.message = message;
        },
        clearMessage(state: tRootState) {
            state.message = null;
        },
    },
    actions: {
        setMessage({ commit }: ActionContext<tRootState, tRootState>, message: tMessage) {
            commit("setMessage", message);
            setTimeout(() => {
                commit("clearMessage");
            }, 4000);
        },
    },
    modules: { auth },
});

// define your own `useStore` composition function
export function useStore() {
    return baseUseStore(key);
}
