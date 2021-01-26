import { ActionContext, Commit, Module } from "vuex";
import { tRootState, store, tMessage } from "@/store/index";
import axios from "@/axios/request";
import { error } from "@/utils/error";

export interface tRequestState {
    token: string | null;
    requests: any[];
}

const TOKEN_KEY = "jwt-token";

export const request: Module<tRequestState, tRootState> = {
    namespaced: true,
    state(): tRequestState {
        return {
            token: "",
            requests: [],
        };
    },
    getters: {
        token(state: tRequestState) {
            return state.token;
        },
        isAuthenticated(state: tRequestState) {
            return !!state.token;
        },
        isAuthenticated2(_, getters) {
            return !!getters.token;
        },
    },

    mutations: {
        setRequests(state: tRequestState, requests) {
            state.requests = requests;
        },
        addRequests(state: tRequestState, request) {
            state.requests.push(request);
        },
    },

    actions: {
        async create({ commit, dispatch, getters }: ActionContext<tRequestState, tRootState>, payload) {
            try {
                const token = store.getters["auth/token"];

                const { data } = await axios.post(`/request.json?auth=${token}`, payload);
                dispatch("setMessage", { value: "Заявка успешно создана", type: "primary" } as tMessage, {
                    root: true,
                });
            } catch (e) {
                dispatch("setMessage", { value: e.message, type: "danger" } as tMessage, { root: true });
            }
        },
    },
};
