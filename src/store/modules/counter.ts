import { MutationTree, Module, Store as VuexStore, Payload } from "vuex";
import { strEnum } from "./utility-func";
import { State as RootState } from "@/store";

const CounterMutations = strEnum(["increment", "setAdd"]);
type CounterMutationsType = keyof typeof CounterMutations;

enum MTT {
  setAdd = "setAdd",
  decrAdd = "decrAdd"
}

type MutationPayloads = {
  setAdd: { addCnt: number };
  decrAdd: { decAdd: number };
};

export interface CounterSetAdd extends Payload {
  addCnt: number;
  type: MTT.setAdd;
}

interface MuTTT<E extends keyof MutationPayload> {
  type: E;
  arg: MutationPayload[E];
}

const b: MuTTT<any> = { type: "setAdd", arg: {} };

// type RedisClient2 = {
//   on<E extends keyof Events>(event: E, f: (arg: Events[E]) => void): void;
// };

let sample: CounterMutationsType;

sample = CounterMutations.increment;
sample = "setAdd";

// Выразим этот код с помощью   отображенного типа (см. подраздел «Отображенные типы» на с. 173),
type MutationPayload = {
  setOne: void;
  setAdd: { addCnt: number };
  setMulti: { addCnt1: number; addCnt2: number };
};
type CounterCommitType = {
  commit<E extends keyof MutationPayload>(
    type: E,
    payload: MutationPayload[E]
  ): void;
};

type aaa<E extends keyof MutationPayload> = [E];

const a2: aaa<"setAdd"> = setAdd;
console.log(a2);

// const a1:CounterCommitType = {
//   commit( 'setOne',{addCnt:number}) {console.log('a')}
// }

// Define mutations
const mutations: MutationTree<CounterState> = {
  setOne(state: CounterState) {
    state.counter = 1;
  },
  [CounterMutations.setAdd](state: CounterState, payload: { addCnt: number }) {
    // на вход поступит {type : 'setAdd',addCnt:1}
    state.counter += payload.addCnt;
  },
  setMulti(state: CounterState, payload: { addCnt1: number; addCnt2: number }) {
    state.counter += payload.addCnt1 + payload.addCnt2;
  },
  [MTT.decrAdd](state: CounterState, payload: { decAdd: number }) {
    // на вход поступит {type : 'setAdd',addCnt:1}
    state.counter -= payload.decAdd;
  }
};

// Declare state
export type CounterState = {
  counter: number;
};

// Create initial state
const state: CounterState = {
  counter: 0
};

export const CounterModule: Module<CounterState, RootState> = {
  state,
  mutations
  // Namespacing Vuex modules is tricky and hard to type check with typescript.
  // Instead of namespacing, we could create our own namespacing mechanism by
  // prefixing the value of the TypeScript enum with the namespace, e.g.
  // enum TodoActions {
  //   AddTodo = 'TODO__ADD_TODO'
  // }
  // namespaced: true,
};
