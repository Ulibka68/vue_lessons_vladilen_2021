import { MutationTree } from "vuex";
import { strEnum } from "./utility-func";
import { State as RootState } from "@/store";

type MutationPayload = {
  setOne: { type: "setOne" };
  setAdd: { type: "setAdd"; addCnt: number };
  setMulti: { type: "setMulti"; addCnt1: number; addCnt2: number };
};

type Mutations = {
  [Property in keyof MutationPayload]: (
    state: State,
    payload: MutationPayload[Property]
  ) => void;
};

export const state = {
  counter: 0
};

export type State = typeof state;

export const mutations: Mutations = {
  setOne(state: State, payload: { type: "setOne" }) {
    state.counter = 0;
  },
  setAdd(state, payload) {
    state.counter = 0;
  },
  setMulti(state,payload){
    state.counter = 0;
  }
};
