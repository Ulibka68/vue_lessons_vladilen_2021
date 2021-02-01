import { MutationTree } from "vuex";

type MutationPayload = {
  setOne: void;
  setAdd: { addCnt: number };
  setMulti: { addCnt1: number; addCnt2: number };
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

export const mutations: MutationTree<State> & Mutations = {
  setOne(state, payload) {
    state.counter = 0;
  },
  setAdd(state, payload) {
    state.counter += payload.addCnt;
  },
  setMulti(state, payload) {
    state.counter += payload.addCnt1 + payload.addCnt2;
  }
};
