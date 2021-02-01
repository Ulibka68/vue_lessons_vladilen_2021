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
  setOne: { type: "setOne" };
  setAdd: { type: "setAdd"; addCnt: number };
  setMulti: { type: "setMulti"; addCnt1: number; addCnt2: number };
};
type CounterCommitType = {
  commit<E extends keyof MutationPayload>(
    type: E,
    payload: MutationPayload[E]
  ): void;
};

type CounterCommitType3<Property extends keyof Type, Type = MutationPayload> = {
  payload: Type[Property];
  type: Property;
};
type CounterCommitType4<Property extends keyof MutationPayload> = (
  type: Property,
  payload: MutationPayload[Property]
) => void;

const commit4: CounterCommitType4<"setAdd"> = (
  tp: "setAdd",
  payload: { addCnt: number }
) => {
  console.log(payload.addCnt);
};

const commit5: CounterCommitType4<keyof MutationPayload> = (type, payload) => {
  console.log("a");
  switch (payload.type) {
    case "setAdd":
      console.log(payload.addCnt);
      break;
    case "setMulti":
      console.log(payload.addCnt1, payload.addCnt2);
      break;
  }
};

interface Aeee {
  ab: string;
  fg: number;
}
type aaa<Aeee, E extends keyof Aeee> = [E];

function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value;
}
const a4: Aeee = { ab: "a", fg: 1 };
const a3 = setValue<Aeee, "ab" | "fg">(a4, "ab", "sdasd");
const a5 = setValue(a4, "fg", 25);

// const a2: aaa<Aeee, "ab"> = "ab";
// console.log(a2);

type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };
type Coordinate = [number, string];
type PromiseCoordinate = MapToPromise<Coordinate>; // [Promise<number>, Promise<string>]
const a7: PromiseCoordinate = [
  new Promise<number>(() => {
    console.log("a");
  }),
  new Promise<string>(() => {
    console.log("a");
  })
];

interface Coord2 {
  aa: number;
  bb: string;
}
type PromiseCoord2 = MapToPromise<Coord2>;
const a8: PromiseCoord2 = {
  aa: new Promise<number>(() => {
    console.log("a");
  }),
  bb: new Promise<string>(() => {
    console.log("a");
  })
};

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
