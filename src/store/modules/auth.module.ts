import { ActionContext, Commit, Module } from "vuex";
import { tRootState } from "@/store/index";
import axios from "axios";
import { error } from "@/utils/error";

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
        async login({ commit, dispatch }: ActionContext<tState, tRootState>, payload) {
            const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
            try {
                const { data } = await axios.post(url, {
                    ...payload,
                    returnSecureToken: true,
                });
                commit("setToken", data.idToken);
                dispatch("clearMessage", null, { root: true });
            } catch (e) {
                dispatch(
                    "setMessage",
                    {
                        value: error(e.response.data.error.message),
                        type: "danger",
                    },
                    { root: true }
                );
                console.log(error(e.response.data.error.message));
                throw new Error(e);
            }

            // v@mail.ru 1234567
        },
    },
};
