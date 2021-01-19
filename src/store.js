import { createStore } from "vuex";

export default createStore({
  state() {
    return { counter: 1 };
  },
  mutations: {
    incrCounter(state) {
      state.counter++;
    },
    add(state, payload) {
      // console.log(payload);
      // state.counter += payload;
      state.counter += payload.value; // redux style
    },
  },
  getters: {
    counter(state) {
      if (state.counter > 50) return 0;
      return state.counter;
    },
    doubleCounter(_, getters) {
      return getters.counter * 2;
    },
  },
  actions: {
    incrementAsync({ commit }, payload) {
      console.log("incrementAsync start");
      setTimeout(() => {
        commit({ type: "add", ...payload });
        console.log("incrementAsync end");
      }, 500);
    },
    incrementAsyncDelay({ commit }, { value, delay }) {
      console.log("incrementAsync start");
      setTimeout(() => {
        commit({ type: "add", value });
        console.log("incrementAsync end");
      }, delay);
    },
  },
});
