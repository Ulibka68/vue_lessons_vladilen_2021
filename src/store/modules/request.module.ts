import { ActionContext, Commit, Module } from "vuex";
import { tRootState, store, tMessage } from "@/store/index";
import axios from "@/axios/request";
import { error } from "@/utils/error";

export const statusArr = ["done", "canceled", "active", "pending"] as const;
// export type tStatus = "done" | "canceled" | "active" | "pending";
export type tStatus = typeof statusArr[number];

type tStatusDescriptions = {
  [K in tStatus]: { text: string; className: string };
};

export const statusDescriptions: tStatusDescriptions = {
  done: { text: "Завершен", className: "primary" },
  canceled: { text: "Отменен", className: "danger" },
  active: { text: "Активен", className: "primary" },
  pending: { text: "Выполняется", className: "warning" },
};

type tStatusDescriptionsArray = {
  key: string;
  text: string;
  className: string;
};
export const statusDescriptionsArray: tStatusDescriptionsArray[] = [];

function formArrayDescr() {
  Object.keys(statusDescriptions).map((itmKey) => {
    statusDescriptionsArray.push({
      // @ts-ignore
      ...statusDescriptions[itmKey],
      key: itmKey,
    });
  });
}
formArrayDescr();

export interface tOneRequest {
  fio: string;
  phone: string;
  amount: number;
  status: tStatus;
  id: any;
}

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
    requests(state: tRequestState) {
      return state.requests;
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
    async create(
      { commit, dispatch, getters }: ActionContext<tRequestState, tRootState>,
      payload
    ) {
      try {
        const token = store.getters["auth/token"];

        const { data } = await axios.post(
          `/request.json?auth=${token}`,
          payload
        );
        commit("addRequests", { ...payload, id: data.name });
        dispatch(
          "setMessage",
          { value: "Заявка успешно создана", type: "primary" } as tMessage,
          {
            root: true,
          }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          { value: e.message, type: "danger" } as tMessage,
          { root: true }
        );
      }
    },

    async loadById(
      { commit, dispatch, getters }: ActionContext<tRequestState, tRootState>,
      id: string
    ) {
      try {
        const token = store.getters["auth/token"];

        const { data } = await axios.get(`/request/${id}.json?auth=${token}`);
        return data;
      } catch (e) {
        dispatch(
          "setMessage",
          { value: e.message, type: "danger" } as tMessage,
          { root: true }
        );
      }
    },

    async load({
      commit,
      dispatch,
      getters,
    }: ActionContext<tRequestState, tRootState>) {
      try {
        const token = store.getters["auth/token"];

        const { data } = await axios.get(`/request.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));
        commit("setRequests", requests);
      } catch (e) {
        dispatch(
          "setMessage",
          { value: e.message, type: "danger" } as tMessage,
          { root: true }
        );
      }
    },

    async remove(
      { commit, dispatch, getters }: ActionContext<tRequestState, tRootState>,
      id: string
    ) {
      try {
        const token = store.getters["auth/token"];

        await axios.delete(`/request/${id}.json?auth=${token}`);
        dispatch("setMessage", { value: "Заявка удалена" } as tMessage, {
          root: true,
        });
      } catch (e) {
        dispatch(
          "setMessage",
          { value: e.message, type: "danger" } as tMessage,
          { root: true }
        );
      }
    },

    async update(
      { commit, dispatch, getters }: ActionContext<tRequestState, tRootState>,
      request
    ) {
      try {
        const token = store.getters["auth/token"];

        await axios.put(`/request/${request.id}.json?auth=${token}`, request);
        dispatch(
          "setMessage",
          { value: "Заявка обновлена", type: "primary" } as tMessage,
          { root: true }
        );
      } catch (e) {
        dispatch(
          "setMessage",
          { value: e.message, type: "danger" } as tMessage,
          { root: true }
        );
      }
    },
  },
};
